import { HTTP } from '../../core/transports/index.js'
import { SystemConsumerRequest, SystemResponse, SystemGenerateTokenRequest } from '../../common/types.js'

export class System extends HTTP {
  async createConsumer(payload: SystemConsumerRequest): Promise<SystemResponse> {
    return this.request<SystemResponse>({
      url: '/systems',
      options: {
        method: 'POST',
        data: payload,
      },
    })
  }

  async generateToken(payload: SystemGenerateTokenRequest): Promise<SystemResponse> {
    return this.request<SystemResponse>({
      url: '/systems/token',
      options: {
        method: 'POST',
        data: payload,
      },
    })
  }
}
