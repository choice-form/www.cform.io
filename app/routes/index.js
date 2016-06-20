import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate(controller, model) {
    this._super(...arguments)

    this.render('layout/header', {
      into: 'application',
      outlet: 'header'
    })
  }
});
