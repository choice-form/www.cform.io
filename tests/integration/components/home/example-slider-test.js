import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home/example-slider', '集成测试 | 组件 | home/example-slider', {
  integration: true
});

test('正确渲染', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // TODO: write the real test
  this.set('examples', [{background: ''}])
  this.render(hbs`{{home/example-slider examples=examples}}`);

  assert.equal(this.$().length, 1);
});
