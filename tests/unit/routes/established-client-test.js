import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | established-client', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:established-client');
    assert.ok(route);
  });
});
