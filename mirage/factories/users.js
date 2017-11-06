import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.firstName()
  },
  surname() {
    return faker.name.lastName()
  },
  DOB() {
    return faker.date.past()
  },
  city() {
    return faker.address.city()
  },
  likesTrains() {
    return faker.random.boolean()
  },
  details() {
    return faker.lorem.paragraph()
  }

});