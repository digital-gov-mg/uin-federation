import { UINFederation } from '../frontend/lib/index.js'
import { Uin } from '../frontend/lib/uin.js'
import { Log } from '../frontend/lib/log.js'
import { System } from '../frontend/lib/system.js'
import { Health } from '../frontend/lib/health.js'

// Mock the subclasses
jest.mock('../frontend/lib/uin.js')
jest.mock('../frontend/lib/log.js')
jest.mock('../frontend/lib/system.js')
jest.mock('../frontend/lib/health.js')

describe('UINFederation', () => {
  const baseUrl = 'https://api.test.com'
  const clientId = 'test-client-id'
  const clientSecret = 'test-client-secret'

  let uinFederation: UINFederation

  beforeEach(() => {
    jest.clearAllMocks()

    uinFederation = new UINFederation({
      baseUrl,
      clientId,
      clientSecret,
    })
  })

  it('should initialize with Uin, Log, and System instances', () => {
    expect(Uin).toHaveBeenCalledWith(baseUrl, clientId, clientSecret)
    expect(Log).toHaveBeenCalledWith(baseUrl, clientId, clientSecret)
    expect(System).toHaveBeenCalledWith(baseUrl, clientId, clientSecret)
    expect(Health).toHaveBeenCalledWith(baseUrl, clientId, clientSecret)

    expect(uinFederation.uins).toBeInstanceOf(Uin)
    expect(uinFederation.logs).toBeInstanceOf(Log)
    expect(uinFederation.systems).toBeInstanceOf(System)
    expect(uinFederation.health).toBeInstanceOf(Health)
  })

  it('should expose uin, log, and system properties', () => {
    expect(uinFederation).toHaveProperty('uins')
    expect(uinFederation).toHaveProperty('logs')
    expect(uinFederation).toHaveProperty('systems')
    expect(uinFederation).toHaveProperty('health')
  })
})
