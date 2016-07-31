import { moduleForComponent, test } from 'ember-qunit';
import { A } from 'ember-array/utils';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accordion-item', '集成测试 | 组件 | accordion-item', {
  integration: true
});

test('it pushes its own state object to registry', function(assert) {
  this.set('registry', A([]));
  assert.ok(this.get('registry').length === 0);

  this.render(hbs`
    {{#accordion-item registry=registry}}
      template block text
    {{/accordion-item}}
  `);

  assert.ok(this.get('registry').length === 1);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it pushes its own state object to registry', function(assert) {
  this.set('registry', A([]));

  this.render(hbs`
    {{#accordion-item registry=registry as |state|}}
      <code>{{state.active}}</code>
      <code>{{state.inactive}}</code>
    {{/accordion-item}}
  `);

  assert.equal(this.$().find('code:odd').text(), 'true');
  assert.equal(this.$().find('code:even').text(), 'false');
});

test('it receives an index from outside as id of state object', function(assert) {
  this.set('registry', A([]));
  this.set('index', 0);

  this.render(hbs`
    {{#accordion-item index registry=registry as |state|}}
      <code>{{state.id}}</code>
    {{/accordion-item}}
  `);

  assert.equal(this.$().find('code').text(), '0');
});

test('it uses its own `elementId` as id of state object if index is invalid', function(assert) {
  this.set('registry', A([]));

  this.render(hbs`
    {{#accordion-item registry=registry as |state|}}
      <code>{{state.id}}</code>
    {{/accordion-item}}
  `);

  assert.equal(this.$().find('code').text().length, 8);
});
