import { HTTP } from '../../core/transports/index.js'
import { GetOrCreateUINRequest, UINResponse, GenerateBatchUINResponse } from '../../common/types.js'

export class Uin extends HTTP {
  async getOrCreateUIN(payload: GetOrCreateUINRequest[]): Promise<UINResponse> {
    return this.request<UINResponse>({
      url: '/uins',
      options: {
        method: 'PUT',
        data: payload,
      },
    })
  }

  async revokeUIN(uin: string): Promise<UINResponse> {
    return this.request<UINResponse>({
      url: `/uins/${uin}/revoke`,
      options: {
        method: 'DELETE',
      },
    })
  }

  async generateBatchUIN(count: string): Promise<GenerateBatchUINResponse> {
    return this.request<GenerateBatchUINResponse>({
      url: '/uins/batch',
      options: {
        method: 'POST',
        params: { count },
      },
    })
  }
}
