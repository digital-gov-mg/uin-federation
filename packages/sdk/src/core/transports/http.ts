import * as http from 'axios'

import { HTTPRequestParameters, HTTPInstance, HTTPResponse } from '@core/transports/http-module.js'
import { fetchSytemToken } from '@common/utils/fetch-system-token.js'
import { getCookie, setCookie } from '@common/utils/cookie-process.js'

export { http }

export abstract class HTTP {
  private instance: HTTPInstance
  private accessToken: string | null = getCookie({ name: 'nui_access_token' }) ?? null
  private isAlreadyFetchingAccessToken = false

  constructor(private baseUrl: string, private clientId: string, private clientSecret: string) {
    if (!baseUrl || !clientId || !clientSecret) {
      throw new Error('Please provide all required configuration parameters')
    }

    if (!this.accessToken) {
      fetchSytemToken({
        baseUrl: this.baseUrl,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      })
        .then(res => {
          setCookie({ name: 'nui_access_token', value: res.data.accessToken })
          setCookie({ name: 'nui_refresh_token', value: res.data.refreshToken })
        })
        .catch(err => console.error(err))
    }

    this.instance = http.default.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    })
  }

  protected async request<T>({ url, options }: HTTPRequestParameters): Promise<T> {
    this.instance.interceptors.request.use(
      config => {
        if (this.accessToken) {
          config.headers['Authorization'] = `Bearer ${this.accessToken}`
        }
        return config
      },
      error => Promise.reject(error),
    )

    this.instance.interceptors.response.use(
      (response: HTTPResponse) => response,
      async error => {
        if (!error.response) return Promise.reject(error)

        const { config, response } = error
        const originalRequest = config

        if ((response.status === 401 || response.status === 403) && !originalRequest._retry) {
          originalRequest._retry = true

          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true

            try {
              const res = await fetchSytemToken({
                baseUrl: this.baseUrl,
                clientId: this.clientId,
                clientSecret: this.clientSecret,
              })

              setCookie({
                name: 'nui_access_token',
                value: res.data.accessToken,
              })
              setCookie({
                name: 'nui_refresh_token',
                value: res.data.refreshToken,
              })
            } catch (err) {
              return Promise.reject(err)
            } finally {
              this.isAlreadyFetchingAccessToken = false
            }
          }

          originalRequest.headers['Authorization'] = `Bearer ${this.accessToken}`
          return this.instance(originalRequest)
        }

        return Promise.reject(error)
      },
    )

    try {
      const response = await this.instance.request<T>({
        url,
        ...options,
      })

      return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        const axiosError = error as { response?: { data?: { message?: string } } }
        const errorMessage =
          axiosError.response?.data?.message || error.message || 'An error occurred while sending request'

        throw new Error(errorMessage)
      }

      throw new Error('An unknown error occurred while sending request')
    }
  }
}
