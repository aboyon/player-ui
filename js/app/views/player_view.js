var PlayerView = Backbone.View.extend({

  initialize: function() {
    this.template = PlayerViewTemplate;
    var self = this;
    this.model.fetch({ success: function(){
      self.render();
    }});
    this.listenTo(this.model, 'reset', this.render);
  },

  render: function() {
    $("section#main .container h1").html(this.model.get("name"));
    this.$el.html(this.template({ player: this.model.toJSON() }));
    return this;
  }
})