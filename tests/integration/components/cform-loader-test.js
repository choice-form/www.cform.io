import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cform-loader', '集成测试 | 组件 | cform loader', {
  integration: true
});

test('正确渲染', function(assert) {
  this.render(hbs`{{cform-loader}}`);
  assert.equal(this.$().text().trim(), '', '组件以行内方式渲染');
});
