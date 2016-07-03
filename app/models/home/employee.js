import Model from 'ember-data/model'
import attr from 'ember-data/attr'

export default Model.extend({
  name: attr('string'),
  title: attr('string'),
  intro: attr('string'),
  avatar: attr('string')
})
