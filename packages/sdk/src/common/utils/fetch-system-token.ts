import { http } from '@core/transports/index.js'

export const fetchSystemToken = ({
  baseUrl,
  clientId,
  clientSecret,
}: {
  baseUrl: string
  clientId: string
  clientSecret: string
}) => {
  return http.default.post(`${baseUrl}/systems/token`, {
    clientId,
    clientSecret,
  })
}
