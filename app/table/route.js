import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  async model() {
    this._super(...arguments);
    return await get(this, 'store').findAll('user');
  }
});
