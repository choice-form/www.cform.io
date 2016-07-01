import { moduleFor, test } from 'ember-qunit'

moduleFor('adapter:application', '单元测试 | 适配器 | application', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
})

// Replace this with your real tests.
test('定义正确', function(assert) {
  let adapter = this.subject()
  assert.ok(adapter, '适配器可以正确实例化')
})
