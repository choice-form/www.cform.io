import Ember from 'ember'
import Route from 'ember-route'

export default Route.extend({
  addStyleNamespace: Ember.on('activate', () => {
    document.body.className = document.body.className + ' ui-guide'
  }),

  uiGuide: Ember.inject.service('ui-guide'),

  model() {
    return this.get('uiGuide.payload')
  },

  renderTemplate() {
    this._super(...arguments)

    this.render('layout/ui-header', {
      into: 'application', outlet: 'header', controller: 'ui-layout'
    })

    this.render('layout/ui-aside', {
      into: 'ui-guide', outlet: 'aside', controller: 'ui-layout', model: this.get('uiGuide.payload')
    })

    this.render('layout/ui-footer', {
      into: 'application', outlet: 'footer', controller: 'ui-layout'
    })
  }
})
