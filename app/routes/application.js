import Ember from 'ember';

export default Ember.Route.extend({
  intl: Ember.inject.service(),
  beforeModel() {
    const navigator = window.navigator
    this.set('locale', navigator.language || navigator.userLanguage)
    this.get('intl').setLocale(this.get('locale'))
  },
})
