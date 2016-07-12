import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-guide/typograph-standard', '继承测试 | 组件 | ui guide/typograph-standard', {
  integration: true
});

test('正确渲染', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-guide/typograph-standard}}`);

  assert.ok(this.$().text().trim().includes('choice'), '组件以行内方式渲染');
});
