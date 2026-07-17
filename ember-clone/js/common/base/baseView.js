App.BaseView = Ember.View.extend({
  didInsertElement: function () {
    var pos = this.get("controller.naviPos");
    Ember.$("#navibar").html(App.renderNavigationBar(pos));
  },
});
