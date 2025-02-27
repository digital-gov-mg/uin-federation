import { frontendSdk } from '../lib/frontend-sdk.js'

describe('frontendSdk', () => {
  it('should work', () => {
    expect(frontendSdk()).toEqual('frontend-sdk')
  })
})
