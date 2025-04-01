import { HTTP } from '@core/transports/index.js'
import { HealthResponse } from '@common/types.js'

export class Health extends HTTP {
  async check(): Promise<HealthResponse> {
    return this.request<HealthResponse>({
      url: '/health',
      options: {
        method: 'GET',
      },
    })
  }
}
