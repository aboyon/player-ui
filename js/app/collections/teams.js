var TeamsCollection = Backbone.Collection.extend({
  model: Team,
  url: CONFIG_URL + "teams"
});

var Teams = new TeamsCollection();