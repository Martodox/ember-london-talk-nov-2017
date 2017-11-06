import Route from '@ember/routing/route';

const { get } = Ember;

export default Route.extend({
  model() {
    this._super(...arguments);

    return get(this, 'store').findAll('user');

  }
});
