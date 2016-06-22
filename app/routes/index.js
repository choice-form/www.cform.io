import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return{
      features: [
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
        {title: 'The Words', description: 'Vivamus sagittis ipsum sit amet'},
      ]
    }
  }
});
