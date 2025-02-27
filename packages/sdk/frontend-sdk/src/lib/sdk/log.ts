import { HTTP } from '../transports/index.js'
import { LogParameters, LogResponse } from '../types.js'

export class Log extends HTTP {
  async retriveAll({ page, limit, type, systemId }: LogParameters): Promise<LogResponse> {
    const url = new URL('/logs')

    url.searchParams.append('page', page)
    url.searchParams.append('limit', limit)
    url.searchParams.append('type', type)
    url.searchParams.append('systemId', systemId)

    return this.request<LogResponse>({
      url: url.toString(),
      options: {
        method: 'GET',
      },
    })
  }
}
