App.M010000Controller = Ember.Controller.extend({
  naviPos: 1,
  actions: {
    goNext: function () {
      App.flowModel.set("productName", "정기적금");
      this.transitionToRoute("m014000");
    },
  },
});
