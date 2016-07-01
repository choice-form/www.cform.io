import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.name.title()
  },
  description() {
    return faker.lorem.paragraph()
  },
  figure() {
    return faker.image.image(480, 240, true)
  },
  icon() {
    return faker.image.image(48, 48, true)
  }
})
