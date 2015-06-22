var MatchesCollection = Backbone.Collection.extend({
  model: Match,
  url: CONFIG_URL + "matches"
});

var Matches = new MatchesCollection();