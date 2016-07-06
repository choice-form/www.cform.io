import { faker } from 'ember-cli-mirage'
faker.locale = 'zh_CN'

export default function() {
  this.urlPrefix = 'http://localhost:1337'

  this.namespace = 'api/home'
  this.get('/features')
  this.get('/employees')
  this.get('/examples')
  this.get('services')
}
