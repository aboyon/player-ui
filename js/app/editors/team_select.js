Backbone.Form.editors.TeamSelect = Backbone.Form.editors.Select.extend({

  initialize: function (options) {
    options = options || {};
    console.log(options);
    Backbone.Form.editors.Select.prototype.initialize.call(this, options);
    this.$el.val(this.value);
  },

  render: function () {
    console.log(this.options)
    var html = "<select name='caca' class='form-control'>";
    _.each(this.options, function(team) {
      html = html + "<option value='"+team.get("id")+"'>"+team.get("name")+"</option>";
    })
    html = html + "</select>";
    return this;
  }

}, {
});
