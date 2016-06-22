import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home/show-case', '集成测试 | 组件 | home/show-case', {
  integration: true
});

test('正确渲染', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home/show-case}}`);

  assert.equal(this.$().find('header').text().trim(), 'form follows choice', '组件以行内方式渲染');
});
