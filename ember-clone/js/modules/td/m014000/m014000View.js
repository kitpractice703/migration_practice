App.M014000View = App.BaseView.extend({
  didInsertElement: function () {
    this._super();
    this.get("controller").set("productName", App.flowModel.get("productName"));
  },
});
