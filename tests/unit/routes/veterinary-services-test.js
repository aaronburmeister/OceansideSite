import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | veterinary-services', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:veterinary-services');
    assert.ok(route);
  });
});
