import Cookie from 'js-cookie'
import { getCookie, setCookie } from './cookie-process.js'

// Mock js-cookie
jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
}))

describe('Cookie Process Utils', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getCookie', () => {
    it('should call Cookie.get with the provided name', () => {
      const name = 'test-cookie'

      getCookie({ name })

      expect(Cookie.get).toHaveBeenCalledWith(name)
    })

    it('should return the value from Cookie.get', () => {
      const name = 'test-cookie'
      const expectedValue = 'test-value'

      // Fix the mock implementation with proper typing
      ;(Cookie.get as jest.Mock).mockReturnValueOnce(expectedValue)

      const result = getCookie({ name })

      expect(result).toBe(expectedValue)
    })
  })

  describe('setCookie', () => {
    it('should call Cookie.set with the correct parameters', () => {
      const name = 'test-cookie'
      const value = 'test-value'

      setCookie({ name, value })

      expect(Cookie.set).toHaveBeenCalledWith(name, value, {
        expires: 7,
        secure: true,
      })
    })
  })
})
