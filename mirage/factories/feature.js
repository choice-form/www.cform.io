import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.name.jobType()
  },
  description() {
    return faker.lorem.paragraph()
  },
  figure() {
    return faker.image.image(480, 240, true)
  },
})
