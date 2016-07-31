import Ember from 'ember';
import RSVP from 'rsvp';
import computed from 'ember-computed';
import { faker } from 'ember-cli-mirage';

export default Ember.Route.extend({
  hasLayout: false,

  model() {
    return RSVP.resolve([{
      title: computed(function() { return faker.lorem.sentence() }),
      content: computed(function() { return faker.lorem.paragraph() })
    }, {
      title: computed(function() { return faker.lorem.sentence() }),
      content: computed(function() { return faker.lorem.paragraph() })
    }, {
      title: computed(function() { return faker.lorem.sentence() }),
      content: computed(function() { return faker.lorem.paragraph() })
    }]);
  }
});
