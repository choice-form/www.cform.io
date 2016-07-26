import Route from 'ember-route';
import inject from 'ember-service/inject';

export default Route.extend({
  hasLayout: false,

  intl: inject(),

  beforeModel() {
    const navigator = window.navigator
    this.set('locale', navigator.language || navigator.userLanguage)
    return this.get('intl').setLocale(this.get('locale'))
  },
});
