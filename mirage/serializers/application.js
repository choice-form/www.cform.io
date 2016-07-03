import { JSONAPISerializer } from 'ember-cli-mirage'

export default JSONAPISerializer.extend({
  typeKeyForModel(model) {
    switch (model.modelName) {
    case 'feature':
      model.modelName = `home/${model.modelName}`
      break
    case 'employee':
      model.modelName = `home/${model.modelName}`
      break
    default: break
    }
    return JSONAPISerializer.prototype.typeKeyForModel.call(this, model)
  }
})
