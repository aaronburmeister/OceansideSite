import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | our-staff', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:our-staff');
    assert.ok(route);
  });
});
