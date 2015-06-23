var Player = Backbone.Model.extend({
  url: function () {
    return (this.get('id')) ? CONFIG_URL + "players/" + this.get('id') : CONFIG_URL + "players";
  }
})