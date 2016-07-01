import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/application-loader', '集成测试 | 组件 | ui/application-loader', {
  integration: true
});

test('正确渲染', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/application-loader}}`);

  assert.equal(this.$().text().trim(), '', '组件以行内方式渲染');
});
