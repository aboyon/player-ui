var Player = Backbone.Model.extend({
  fetched: false,
  url: function () {
    return CONFIG_URL + "players/" + this.get('id')
  }
})