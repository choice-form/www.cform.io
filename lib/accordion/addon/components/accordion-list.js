import Component from 'ember-component';
import layout from 'accordion/templates/components/accordion-list';
import { A } from 'ember-array/utils';
import { not } from 'ember-computed';

const AccordionListComponent = Component.extend({
  layout,

  /**
   * @property {EmberArray} registry - To store all items' state objects.
   * @private
   */
  registry: A([]),

  /**
   * @property {Boolean} [coexist=true] - Allow multiple items open at the same time.
   * @public
   */
  coexist: true,
  monopoly: not('coexist'),

  // TODO: this is not completed yet, some edge cases should be take care of.
  /**
   * @property {Boolean} [preserve=true] - Ensure to keep at least one item open.
   * It's only used when `coexist` is false.
   * @public
   */
  // preserve: true,

  /**
   * A utility method to open all items in registry
   *
   * @method _openAll
   * @param {EmberArray} [registry = this.get('registry')]
   * @private
   */
  _openAll(registry = this.get('registry')) {
    if (registry.isEvery('active', true)) return;
    this.get('registry').setEach('active', true);
  },

  /**
   * A utility method to open all items in registry except the one by id.
   *
   * @method _openOthers
   * @param {Number} [id] - The exception item's id.
   * @param {EmberArray} [registry = this.get('registry')]
   * @private
   */
  _openOthers(id, registry = this.get('registry')) {
    registry.rejectBy('id', id).setEach('active', true);
  },

  /**
   * A utility method to close all items in registry
   *
   * @method _closeAll
   * @param {EmberArray} [registry = this.get('registry')]
   * @private
   */
  _closeAll(registry = this.get('registry')) {
    if (registry.isEvery('active', false)) return;
    this.get('registry').setEach('active', false);
  },

  /**
   * A utility method to close all items in registry except the one by id.
   *
   * @method _closeOthers
   * @param {Number} [id] - The exception item's id.
   * @param {EmberArray} [registry = this.get('registry')]
   * @private
   */
  _closeOthers(id, registry = this.get('registry')) {
    registry.rejectBy('id', id).setEach('active', false);
  },

  /**
   * A utility method to toggle all items in registry
   *
   * @method _toggleAll
   * @param {EmberArray} [registry = this.get('registry')]
   * @private
   */
  _toggleAll(registry = this.get('registry')) {
    registry.invoke('toggleProperty', 'active');
  },

  actions: {
    /**
     * A public interface to set active state to true.
     * 
     * @method open
     * @param {Number} id - state id
     * @param {Event} event DOM event object
     * @public
     */
    open(id, event) {
      event.stopPropagation();

      const item = this.get('registry').findBy('id', id);

      if (this.get('monopoly')) this._closeAll();

      item.set('active', true);
    },

    /**
     * A public interface to set active state to false.
     * 
     * @method close
     * @param {Number} id - state id
     * @param {Event} event DOM event object
     * @public
     */
    close(id, event) {
      event.stopPropagation();

      const item = this.get('registry').findBy('id', id);

      if (this.get('monopoly') && this.get('preserve')) return;

      item.set('active', false);
    },

    /**
     * A public interface to toggle active state between true and false.
     * 
     * @method toggle
     * @param {Number} id - state id
     * @param {Event} event DOM event object
     * @public
     */
    toggle(id, event) {
      event.stopPropagation();

      const item = this.get('registry').findBy('id', id);

      if (this.get('monopoly')) this._closeOthers(id);

      item.toggleProperty('active');
    }
  }
});

export default AccordionListComponent;
