import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home/service-slider', '集成测试 | 组件 | home/service-slider', {
  integration: true
});

test('正确渲染 services 列表', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const services = [...Array(4).keys()]

  this.set('services', services.map(() => ({
    title: 'Title', description: 'description'
  })))
  this.render(hbs`{{home/service-slider services=services}}`);

  assert.equal(this.$().find('section').length, 4, '组件渲染 4 个列表项');
});
