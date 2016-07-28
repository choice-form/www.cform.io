import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scrollmagic-controller', 'Integration | Component | scrollmagic controller', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scrollmagic-controller}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scrollmagic-controller}}
      template block text
    {{/scrollmagic-controller}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
