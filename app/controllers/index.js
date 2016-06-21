import Ember from 'ember'

export default Ember.Controller.extend({
  menuShown: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('menuShown')
    }
  }
})
