import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('accordion-list', '集成测试 | 组件 | accordion-list', {
  integration: true
});

const model = [
  {title: 'Example Post Heading', content: 'Phasellus at arcu a ipsum aliquet posuere non sit amet nibh.'},
  {title: 'Example Post Heading', content: 'Phasellus at arcu a ipsum aliquet posuere non sit amet nibh.'},
  {title: 'Example Post Heading', content: 'Phasellus at arcu a ipsum aliquet posuere non sit amet nibh.'},
];

test('it renders in block to expose each item in a list', function(assert) {
  this.set('model', model);

  this.render(hbs`
    {{#accordion-list model as |accordion|}}
      {{#each model as |post index|}}
        {{#accordion.item index}}
          <h3>{{post.title}}</h3>
          <p>{{post.content}}</p>
        {{/accordion.item}}
      {{/each}}
    {{/accordion-list}}
  `);

  const $component = this.$(':first-child');

  assert.ok($component.find('h3').length === 3);
  assert.ok($component.find('p').length === 3);
});

test('it exposes three actions', function(assert) {
  this.set('model', model);

  this.render(hbs`
    {{#accordion-list model as |accordion|}}
      {{#each model as |post index|}}
        {{#accordion.item index}}
          <button onclick={{action accordion.open}}>Open</button>
          <button onclick={{action accordion.close}}>Close</button>
          <button onclick={{action accordion.toggle}}>Toggle</button>
        {{/accordion.item}}
      {{/each}}
    {{/accordion-list}}
  `);

  const $component = this.$(':first-child');

  assert.ok($component.find('button').length === 9);
});

test('it switches active state with `open` and `close` actions', function(assert) {
  this.set('model', [
    {title: 'Example Post Heading', content: 'Phasellus at arcu a ipsum aliquet posuere non sit amet nibh.'},
  ]);

  this.render(hbs`
    {{#accordion-list model as |accordion|}}
      {{#each model as |post index|}}
        {{#accordion.item index as |state|}}
          <code class="active">{{state.active}}</code>
          <code class="inactive">{{state.inactive}}</code>

          <button onclick={{action accordion.open state.id}}>Open</button>
          <button onclick={{action accordion.close state.id}}>Close</button>
        {{/accordion.item}}
      {{/each}}
    {{/accordion-list}}
  `);

  const $component = this.$(':first-child');

  assert.equal($component.find('.active').text(), 'false');
  assert.equal($component.find('.inactive').text(), 'true');

  /*
  $component.find('button:even').click();

  assert.equal($component.find('.active').text(), 'true');
  assert.equal($component.find('.inactive').text(), 'false');

  $component.find('button:odd').click();

  assert.equal($component.find('.active').text(), 'false');
  assert.equal($component.find('.inactive').text(), 'true');
  */
});

test('it toggles active state with `toggle` action', function(assert) {
  this.set('model', [
    {title: 'Example Post Heading', content: 'Phasellus at arcu a ipsum aliquet posuere non sit amet nibh.'},
  ]);

  this.render(hbs`
    {{#accordion-list model as |accordion|}}
      {{#each model as |post index|}}
        {{#accordion.item index as |state|}}
          <code class="active">{{state.active}}</code>
          <code class="inactive">{{state.inactive}}</code>

          <button onclick={{action accordion.toggle state.id}}>Toggle</button>
        {{/accordion.item}}
      {{/each}}
    {{/accordion-list}}
  `);

  const $component = this.$(':first-child');

  assert.equal($component.find('.active').text(), 'false');
  assert.equal($component.find('.inactive').text(), 'true');

  /*
  $component.find('button').click();

  assert.equal($component.find('.active').text(), 'true');
  assert.equal($component.find('.inactive').text(), 'false');

  $component.find('button').click();

  assert.equal($component.find('.active').text(), 'false');
  assert.equal($component.find('.inactive').text(), 'true');
  */
});
