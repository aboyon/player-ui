Backbone.Form.editors.Datepicker = Backbone.Form.editors.Text.extend({

  initialize: function (options) {
    options = options || {};
    Backbone.Form.editors.Text.prototype.initialize.call(this, options);
    this.$el.val(this.value);
  },

  render: function () {
    this.$el.datepicker({
      startDate:  "1998-01-01",
      todayHighlight: true,
      autoclose: true,
      format: "yyyy-mm-dd"
    });
    return this;
  }

}, {
});
