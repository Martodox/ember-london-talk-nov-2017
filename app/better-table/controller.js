import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import getColumns from 'ember-london-talk/utils/get-columns';
import userModel from 'ember-london-talk/models/user';


export default Controller.extend({

  users: alias('model'),
  columns: computed(function () {
    return [
        ...getColumns(userModel),
      {
        title: 'Award',
        component: 'train-lover'
      }
    ]
  })

});
