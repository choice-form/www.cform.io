import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-guide/re-markdown', '集成测试 | 组件 | ui guide/re-markdown', {
  integration: true
});

test('正确渲染', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-guide/re-markdown}}`);

  assert.equal(this.$().text().trim(), '', '组件以行内方式渲染');

  // Template block usage:
  this.render(hbs`
    {{#ui-guide/re-markdown}}
      template block text
    {{/ui-guide/re-markdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text', '组件以块级方式渲染');
});
