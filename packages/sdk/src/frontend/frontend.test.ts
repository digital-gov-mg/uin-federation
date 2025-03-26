import { UINFederation } from '../frontend/lib/index.js'
import { Uin } from '../frontend/lib/uin.js'
import { Log } from '../frontend/lib/log.js'
import { System } from '../frontend/lib/system.js'

// Mock the subclasses
jest.mock('../frontend/lib/uin.js')
jest.mock('../frontend/lib/log.js')
jest.mock('../frontend/lib/system.js')

describe('UINFederation', () => {
  const baseUrl = 'https://api.test.com'
  const clientId = 'test-client-id'
  const clientSecret = 'test-client-secret'

  let uinFederation: UINFederation

  beforeEach(() => {
    jest.clearAllMocks()
    uinFederation = new UINFederation(baseUrl, clientId, clientSecret)
  })

  it('should initialize with Uin, Log, and System instances', () => {
    expect(Uin).toHaveBeenCalledWith(baseUrl, clientId, clientSecret)
    expect(Log).toHaveBeenCalledWith(baseUrl, clientId, clientSecret)
    expect(System).toHaveBeenCalledWith(baseUrl, clientId, clientSecret)

    expect(uinFederation.uin).toBeInstanceOf(Uin)
    expect(uinFederation.log).toBeInstanceOf(Log)
    expect(uinFederation.system).toBeInstanceOf(System)
  })

  it('should expose uin, log, and system properties', () => {
    expect(uinFederation).toHaveProperty('uin')
    expect(uinFederation).toHaveProperty('log')
    expect(uinFederation).toHaveProperty('system')
  })
})
