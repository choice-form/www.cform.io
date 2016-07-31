import EmberObject from 'ember-object';
import computed from 'ember-computed';

/**
 * `AccordionState` is a utility class for all accordion items to maintain their
 * UI states. Each Instance of `AccordionState` will be pushed into a registry of
 * `AccordionListComponent` and exposes as state object in to its template.
 *
 * @class Object
 * @extends Ember.Object
 * @public
 */

const AccordionState = EmberObject.extend({
  /**
   * A unique identity for each state instance.
   *
   * @property id
   * @type Number
   * @public
   */
  id: null,

  /**
   * A boolean value to indicate the activity state.
   *
   * @property active
   * @type Boolean
   * @public
   */
  active: null,

  /**
   * The opposite value of `active` property, it is a computed property.
   *
   * @property inactive
   * @type Boolean
   * @public
   */
  inactive: computed('active', {
    get() { return !this.get('active') },
    set(key, value) { return value }
  })
});

AccordionState.toString = () => 'Accordion State';

export default AccordionState;
