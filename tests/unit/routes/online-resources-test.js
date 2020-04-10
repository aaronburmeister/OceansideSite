import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | online-resources', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:online-resources');
    assert.ok(route);
  });
});
