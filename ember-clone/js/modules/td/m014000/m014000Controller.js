App.M014000Controller = Ember.Controller.extend({
  naviPos: 2,
  productName: "",
  actions: {
    goPrev: function () {
      this.transitionToRoute("m010000");
    },

    goNext: function () {
      this.transitionToRoute("m033000");
    },
  },
});
