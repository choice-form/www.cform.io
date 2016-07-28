import Component from 'ember-component';
import layout from '../templates/components/scrollmagic-scene';
import { isNone } from 'ember-utils';
import { SMScene } from 'scrollmagic';

export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);

    const options = this.getWithDefault('options', {});

    if (options.triggerElement && 'self' === options.triggerElement) {
      options.triggerElement = this.element
    }

    this.smScene = new SMScene(options);

    if (this.get('setPin')) {
      this._smSetPing(this.get('setPin'))
    }

    if (this.get('indicators')) {
      this.smScene.addIndicators(/* TODO: provide options for indicators */);
    }

    if (this.parentView.smScenes) {
      this.parentView.smScenes = [...this.parentView.smScenes, this.smScene];
    }
  },

  _smSetPing({element, settings}) {
    if (isNone(settings)) {
      this.smScene.setPin(element);
    } else {
      this.smScene.setPin(element, settings);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this.smScene.destroy(true);
  }
});
