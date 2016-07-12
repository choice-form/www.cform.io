import Ember from 'ember'
import Service from 'ember-service'

export default Service.extend({
  payload: Ember.Object.create({
    heading: 'choice form <small>UI 组件指南</small>',
    widgets: [
      Ember.Object.create({name: 'color-palette', prefix: 'ui-guide', text: '配色方案', type: '样式风格'}),
      Ember.Object.create({name: 'typograph-standard', prefix: 'ui-guide', text: '字形规范', type: '样式风格'}),
      Ember.Object.create({name: 'scroll-magic', prefix: 'ui', text: 'ScrollMagic 组件封装', type: '交互组件'}),
    ]
  })
})
