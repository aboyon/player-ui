var PlayersCollection = Backbone.Collection.extend({
  model: Player,
  url: CONFIG_URL + "players"
});

var Players = new PlayersCollection();