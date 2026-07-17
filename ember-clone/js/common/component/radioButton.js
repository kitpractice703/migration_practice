App.RadioButtonComponent = Ember.Component.extend({
  tagName: "input",
  type: "radio",
  attributeBindings: ["name", "type", "value", "checked:checked"],

  checked: function () {
    return this.get("value") === this.get("groupValue");
  }.property("groupValue", "value"),

  change: function () {
    this.set("groupValue", this.get("value"));
  },
});
