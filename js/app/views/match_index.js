var MatchIndexView = Backbone.View.extend({
  initialize: function() {
    this.template = MatchIndexTemplate
    this.matches = Matches;
    this.listenTo(this.matches, 'reset', this.render);
    var self = this;
    this.matches.fetch({ success: function(){
      self.render();
    }});
  },

  render : function() {
    this.$el.html(this.template({ matches: this.matches.toJSON() }));
    return this;
  }
})