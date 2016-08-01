import Route from 'ember-route'

export default Route.extend({
  model() {
    return {
      list: [
        {
          title: "Enterprice",
          description: "A small river named Duden flows by their place",
          itemList: ["item1", "item2", "item3", "item4"],
          price: "$99.99"
        },
        {
          title: "Enterprice",
          description: "A small river named Duden flows by their place",
          itemList: ["item1", "item2", "item3", "item4"],
          price: "$99.99"
        },
        {
          title: "Enterprice",
          description: "A small river named Duden flows by their place",
          itemList: ["item1", "item2", "item3", "item4"],
          price: "$99.99"
        }
      ]
    }
  }
})
