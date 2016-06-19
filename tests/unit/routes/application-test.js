import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', '单元测试 | 路由 | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('路由定义正确', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
