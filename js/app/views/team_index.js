var TeamsIndexView = Backbone.View.extend({
  initialize: function() {
    this.template = TeamIndexTemplate;
    this.teams = Teams;
    this.listenTo(this.teams, 'reset', this.render);
    var self = this;
    this.teams.fetch({ success: function(){
      self.render();
    }});
  },

  render : function() {
    this.$el.html(this.template({ teams: this.teams.toJSON() }));
    return this;
  }
})