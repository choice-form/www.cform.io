import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', '单元测试 | 路由 | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('正确渲染', function(assert) {
  let route = this.subject();
  assert.ok(route, '路由可以正确实例化');
});
