import { Uin } from '@frontend/lib/uin.js'
import { Log } from '@frontend/lib/log.js'
import { System } from '@frontend/lib/system.js'

export class UINFederation {
  public uin: Uin
  public log: Log
  public system: System

  constructor(baseUrl: string, clientId: string, clientSecret: string) {
    this.uin = new Uin(baseUrl, clientId, clientSecret)
    this.log = new Log(baseUrl, clientId, clientSecret)
    this.system = new System(baseUrl, clientId, clientSecret)
  }
}
