import { http } from '../transports/index.js'

export const fetchSytemToken = ({
  baseUrl,
  clientId,
  clientSecret,
}: {
  baseUrl: string
  clientId: string
  clientSecret: string
}) => {
  return http.default.post(`${baseUrl}/sytems/token`, {
    clientId,
    clientSecret,
  })
}
