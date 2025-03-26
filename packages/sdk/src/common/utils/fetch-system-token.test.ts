import { fetchSystemToken } from './fetch-system-token.js'
import { http } from '../../core/transports/index.js'

jest.mock('../../core/transports/index', () => ({
  http: {
    default: {
      post: jest.fn(),
    },
  },
}))

describe('fetchSystemToken', () => {
  const baseUrl = 'https://api.test.com'
  const clientId = 'test-client-id'
  const clientSecret = 'test-client-secret'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call http.default.post with correct parameters', () => {
    fetchSystemToken({ baseUrl, clientId, clientSecret })

    expect(http.default.post).toHaveBeenCalledWith(`${baseUrl}/sytems/token`, {
      clientId,
      clientSecret,
    })
  })

  it('should return the result from http.default.post', async () => {
    const mockResponse = { data: { accessToken: 'token', refreshToken: 'refresh' } }
    jest.mocked(http.default.post).mockResolvedValueOnce(mockResponse)

    const result = await fetchSystemToken({ baseUrl, clientId, clientSecret })

    expect(result).toBe(mockResponse)
  })
})
