import Component from 'ember-component';
import layout from '../templates/components/scrollmagic-controller';
import { SMController } from 'scrollmagic';

export default Component.extend({
  layout,

  smScenes: [],

  didInsertElement() {
    this._super(...arguments);

    const options = this.getWithDefault('options', {});

    if (options.container && 'self' === options.container) {
      options.container = this.element
    }

    this.smController = new SMController(options);
    this.smController.addScene(this.smScenes);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.smController.destroy(true);
  }
});
