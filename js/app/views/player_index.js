var PlayersIndexView = Backbone.View.extend({

  initialize: function() {
    this.template = PlayerIndexTemplate
    this.players = Players;
    this.listenTo(this.players, 'reset', this.render);
    var self = this;
    this.players.fetch({ success: function(){
      self.render();
    }});
  },

  render : function() {
    this.$el.html(this.template({ players: this.players.toJSON() }));
    return this;
  }
})