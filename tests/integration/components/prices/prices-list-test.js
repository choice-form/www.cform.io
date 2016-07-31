import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('prices/prices-list', 'Integration | Component | prices/prices list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{prices/prices-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#prices/prices-list}}
      template block text
    {{/prices/prices-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
