import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scrollmagic-scene', 'Integration | Component | scrollmagic scene', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scrollmagic-scene}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scrollmagic-scene}}
      template block text
    {{/scrollmagic-scene}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
