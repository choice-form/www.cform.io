import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`
  },
  title() {
    return faker.name.jobTitle()
  },
  intro() {
    return faker.lorem.sentence()
  },
  avatar() {
    return faker.image.avatar()
  },
})
