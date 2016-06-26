import { faker } from 'ember-cli-mirage'
faker.locale = 'zh_CN'

export default function() {
  this.namespace = '/api'
  this.timing = 1000

  this.passthrough()
}
