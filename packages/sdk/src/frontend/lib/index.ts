import { Uin } from './uin.js'
import { Log } from './log.js'
import { System } from './system.js'

export class NuiFederation {
  public uin: Uin
  public log: Log
  public system: System

  constructor(baseUrl: string, clientId: string, clientSecret: string) {
    this.uin = new Uin(baseUrl, clientId, clientSecret)
    this.log = new Log(baseUrl, clientId, clientSecret)
    this.system = new System(baseUrl, clientId, clientSecret)
  }
}
