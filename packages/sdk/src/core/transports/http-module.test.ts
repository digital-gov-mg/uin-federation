import type { HTTPModule, HTTPRequestParameters } from './http-module.js'

describe('HTTPModule Interface', () => {
  // This is more of a type test than a runtime test
  it('should define the correct interface structure', () => {
    // Create a mock implementation of HTTPModule
    const mockHTTPModule: HTTPModule = {
      request: jest.fn().mockResolvedValue({ data: 'test' }),
    }

    // Verify the mock implementation conforms to the interface
    expect(typeof mockHTTPModule.request).toBe('function')

    // Test with sample parameters
    const params: HTTPRequestParameters = {
      url: 'https://test.com',
      options: { method: 'GET' },
    }

    // Call the mock function
    mockHTTPModule.request(params)

    // Verify it was called with correct parameters
    expect(mockHTTPModule.request).toHaveBeenCalledWith(params)
  })
})
