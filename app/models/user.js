import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  surname: attr('string'),
  dob: attr('string'),
  city: attr('string'),
  likesTrains: attr('string'),
  details: attr('string')
});
