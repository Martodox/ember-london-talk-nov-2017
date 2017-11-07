import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';


export default Controller.extend({
  users: alias('model'),
  columns: computed(function () {
    return [{
      propertyName: 'name'
    },
      {
        propertyName: 'surname'
      },
      {
        propertyName: 'dob'
      },
      {
        propertyName: 'city'
      },
      {
        propertyName: 'likesTrains'
      },
      {
        propertyName: 'details'
      }]
  })

});
