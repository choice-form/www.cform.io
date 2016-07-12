import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home/team-page', '集成测试 | 组件 | home/team-page', {
  integration: true
});

test('正确渲染', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home/team-page}}`);

  assert.equal(this.$().text().trim(), '', '组件以行内方式渲染');
});
