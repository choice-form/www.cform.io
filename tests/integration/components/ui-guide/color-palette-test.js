import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-guide/color-palette', '集成测试 | 组件 | ui guide/color-palette', {
  integration: true
});

test('正确渲染', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-guide/color-palette}}`);

  assert.ok(this.$().text().trim().includes('RGB'), '组件以行内方式渲染');
});
