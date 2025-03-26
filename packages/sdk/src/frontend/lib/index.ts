import { Uin } from '@frontend/lib/uin.js'
import { Log } from '@frontend/lib/log.js'
import { System } from '@frontend/lib/system.js'
import { Health } from '@frontend/lib/health.js'

export class UINFederation {
  public uins: Uin
  public logs: Log
  public systems: System
  public health: Health

  constructor({ baseUrl, clientId, clientSecret }: { baseUrl: string; clientId: string; clientSecret: string }) {
    this.uins = new Uin(baseUrl, clientId, clientSecret)
    this.logs = new Log(baseUrl, clientId, clientSecret)
    this.systems = new System(baseUrl, clientId, clientSecret)
    this.health = new Health(baseUrl, clientId, clientSecret)
  }
}
