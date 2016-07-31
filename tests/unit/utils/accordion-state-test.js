import AccordionState from 'homeland/utils/accordion-state';
import { module, test } from 'qunit';

module('单元测试 | 工具类 | AccordionState');

test('it defines `toString` properly', function(assert) {
  assert.expect(1);
  assert.ok(AccordionState.toString() === 'Accordion State');
});

test('it initialize instance correctly', function(assert) {
  assert.expect(3);

  const defaultState = AccordionState.create();

  assert.equal(defaultState.id, null);
  assert.equal(defaultState.active, null);
  assert.ok(defaultState.get('inactive'));
});

test('change `active` will also change `inactive` to opposite value', function(assert) {
  assert.expect(6);

  const state = AccordionState.create({
    active: true
  });

  assert.ok(state.get('active'));
  assert.notOk(state.get('inactive'));

  state.set('active', false);

  assert.notOk(state.get('active'));
  assert.ok(state.get('inactive'));

  state.set('active', true);
  assert.ok(state.get('active'));
  assert.notOk(state.get('inactive'));
});

test('change `inactive` will not change `active` (one way binding)', function(assert) {
  assert.expect(6);

  const state = AccordionState.create({
    active: false,
  });

  assert.notOk(state.get('active'));
  assert.ok(state.get('inactive'));

  state.set('inactive', false);

  assert.notOk(state.get('active'));
  assert.notOk(state.get('inactive'));

  state.set('active', true);
  assert.ok(state.get('active'));
  assert.notOk(state.get('inactive'));
});
