var Team = Backbone.Model.extend({
  url: function () {
    return (this.get('id')) ? CONFIG_URL + "teams/" + this.get('id') : CONFIG_URL + "teams";
  }
})