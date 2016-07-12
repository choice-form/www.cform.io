import Ember from 'ember'
import Route from 'ember-route'

export default Route.extend({
  model(params) {
    const payload = this.modelFor('ui-guide').get('widgets')
    return Ember.RSVP.Promise.resolve(payload.findBy('name', params.name))
  }
})
