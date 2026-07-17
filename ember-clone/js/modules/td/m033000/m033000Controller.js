App.M033000Controller = Ember.Controller.extend({
  naviPos: 3,
  actions: {
    goPrev: function () {
      this.transitionToRoute("m014000");
    },
  },
});
