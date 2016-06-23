import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home/feature-tour', '集成测试 | 组件 | home/feature-tour', {
  integration: true
});

test('正确渲染 features 列表', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const features = [...Array(8).keys()]

  this.set('features', features.map(() => ({
    title: 'title', description: 'description'
  })))

  this.render(hbs`{{home/feature-tour features=features}}`);

  assert.equal(this.$().find('li').length, 8, '组件渲染 8 个列表项');
});
