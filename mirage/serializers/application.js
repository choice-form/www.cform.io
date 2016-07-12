import Ember from 'ember'
import { JSONAPISerializer } from 'ember-cli-mirage'

const { dasherize, pluralize } = Ember.String

export default JSONAPISerializer.extend({
  typeKeyForModel(model) {
    return dasherize(pluralize(model.typeKey || model.modelName))
  }
})
