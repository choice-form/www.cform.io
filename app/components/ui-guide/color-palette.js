import Ember from 'ember'
const { htmlSafe } = Ember.String

const Color = Ember.Object.extend({
  origin: '',
  hexadecimal: Ember.computed('origin', function() {
    return '#' + this.get('origin').split(/,\s?/).map(val => {
      const hex = parseInt(val, 10).toString(16)
      return hex.length == 1 ? '0' + hex : hex
    }).join('')
  }),
  styleContent: Ember.computed('hexadecimal', function () {
    return htmlSafe(`background-color: ${this.get('hexadecimal')}`)
  })
})

export default Ember.Component.extend({
  colors: [
    Color.create({origin: '244, 130, 0'}),
    Color.create({origin: '255, 221, 32'}),
    Color.create({origin: '152, 195, 53'}),
    Color.create({origin: '15, 203, 255'}),
    Color.create({origin: '102, 51, 204'}),
  ]
})
