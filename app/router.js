import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  // 特性
  this.route('features')

  // 案例
  this.route('examples')

  // 服务
  this.route('services')

  // 登录
  this.route('signin')

  // 团队
  this.route('team')

  // 注册
  this.route('signup')

  // UI Guide
  this.route('ui-guide', {path: '/ui'}, function() {
    this.route('ui-detail', {path: '/:name'})
  })

  // 国际化
  this.route('i18n')
})

export default Router
