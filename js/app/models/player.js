var Player = Backbone.Model.extend({
  modelName: "Player",
  fetched: false,
  defaults: {
    name: "",
    dob: new Date(),
    nationality: "ARG"
  }
})