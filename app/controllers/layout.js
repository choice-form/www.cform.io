import Ember from 'ember'
import Controller from 'ember-controller'

export default Controller.extend({
  isMenuShown: false,

  menuVisibility: Ember.computed('isMenuShown', function() {
    return this.get('isMenuShown') ? this.get('styles.shown') : null
  })
})
