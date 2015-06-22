var Player = Backbone.Model.extend({
  fetched: false,
  defaults: {
    id:"",
    name: "",
    dob: new Date(),
    nationality: "ARG"
  }
})