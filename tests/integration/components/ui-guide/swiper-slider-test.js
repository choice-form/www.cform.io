import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-guide/swiper-slider', 'Integration | Component | ui guide/swiper slider', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-guide/swiper-slider}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-guide/swiper-slider}}
      template block text
    {{/ui-guide/swiper-slider}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
