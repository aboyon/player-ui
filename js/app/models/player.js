var Player = Backbone.Model.extend({
  fetched: false,
  defaults: {
    name: "",
    dob: new Date(),
    nationality: "ARG"
  }
})