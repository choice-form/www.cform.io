import Component from 'ember-component';
import layout from 'accordion/templates/components/accordion-item';
import AccordionState from 'accordion/utils/accordion-state';
import { isPresent } from 'ember-utils';

const AccordionItemComponent = Component.extend({
  layout,

  init() {
    this._super(...arguments);

    this.set('state', AccordionState.create({
      id: isPresent(this._index) ? this._index : this.get('elementId'),
      active: this.getWithDefault('active', false)
    }));

    this.get('registry').pushObject(this.get('state'));
  }
});

AccordionItemComponent.reopenClass({
  positionalParams: ['_index']
});

export default AccordionItemComponent;
