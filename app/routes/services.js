import Route from 'ember-route'

export default Route.extend({
  model() {

    return [
      {
        title: 'feature one',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
        list: {
          simpleList: [
            {
              title: "问卷题目设置",
              description: "具体展现"
            },
            {
              title: "问卷题目设置",
              description: "具体展现"
            }

          ],
          detailedList: [
            {
              title: "优势分析",
              list: [
                "操作简单,逻辑清晰",
                "操作简单,逻辑清晰",
                "操作简单,逻辑清晰"
              ]
            },
            {
              title: "优势分析",
              list: [
                "操作简单,逻辑清晰",
                "操作简单,逻辑清晰",
                "操作简单,逻辑清晰"
              ]
            }
          ]
        }
      },
      {
        title: 'feature one',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia ',
      }
    ];


    /*return this.store.findAll('home/service')*/
  }
})
