Backbone.Form.editors.Datepicker = Backbone.Form.editors.Text.extend({

  initialize: function (options) {
    options = options || {};
    Backbone.Form.editors.Text.prototype.initialize.call(this, options);
    this.$el.val(this.value);
  },

  render: function () {
    this.$el.datepicker({
      endDate:  new Date(),
      todayHighlight: true,
      autoclose: true,
      format: "yyyy-mm-dd"
    });
    return this;
  }

}, {
});
