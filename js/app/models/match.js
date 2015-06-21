var Match = Backbone.Model.extend({
  modelName: "Match",
  fetched: false,
  defaults: {
    date: new Date(),
    local_team_id: "",
   	visitor_team_id: "", 
  }
})