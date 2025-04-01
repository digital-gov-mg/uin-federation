import { Uin } from './uin.js'
import { Log } from './log.js'
import { System } from './system.js'
import { Health } from './health.js'

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
