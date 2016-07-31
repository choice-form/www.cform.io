import Ember from 'ember';

export default Ember.Component.extend({
 data:[
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
   {
     title: 'feature one',
     description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
   },
 ],

  iconTitle:['0','1','2','4'],


  //TODO: 测试用 暂时有用

  isShowContent: false,

  actions:{
    showContent(){
      this.toggleProperty('isShowContent')
    }
  }
});
