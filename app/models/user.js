import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  name: attr('string', {
    table: {
      title: 'Name'
    }
  }),
  surname: attr('string', {
    table: {
      title: 'Surname'
    }
  }),
  dob: attr('string', {
    table: {
      title: 'DoB'
    }
  }),
  city: attr('string', {
    table: {
      title: 'From'
    }
  }),
  likesTrains: attr('boolean', {
    table: {
      title: 'Likes Trains'
    }
  }),
  details: attr('string', {
    table: {
      title: 'Details'
    }
  })
});
