var Match = Backbone.Model.extend({
  fetched: false,
  defaults: {
    date: new Date(),
    local_team_id: "",
    visitor_team_id: "",
    local: {
      id:"",
      name:""
    },
    visitor: {
      id:"",
      name:""
    },
  }
})