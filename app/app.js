import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

// Override Ember.Route to extends hasLayout property
Ember.Route.reopen({
  hasLayout: true,

  // FIXME: don't render anything when overriding, use mixin instead
  renderTemplate() {
    this._super(...arguments)

    if (/.*(loading|error)$/.test(this.routeName)) return

    if (this.get('hasLayout')) {
      this.render('layout/header', {into: 'application', outlet: 'header'})
      this.render('layout/footer', {into: 'application', outlet: 'footer'})
    }
  }
})

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
