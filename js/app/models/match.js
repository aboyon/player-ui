var Match = Backbone.Model.extend({
  url: function () {
    return (this.get('id')) ? CONFIG_URL + "matches/" + this.get('id') : CONFIG_URL + "matches";
  },
})