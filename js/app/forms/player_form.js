var PlayerForm = Backbone.View.extend({

  events: {
    'click .save-btn' : 'saveUser',
  },

  initialize: function() {
    this.template = PlayerFormTemplate;
    var self = this;
    this.model.fetch({ success: function(){
      self.render();
    }});
    this.listenTo(this.model, 'reset', this.render);
  },

  render: function() {
    this.$el.html(this.template({ player: this.model.toJSON() }));
    this.$el.find("form#player input[name='dob']").datepicker({
      format: 'yyyy-mm-dd',
      startDate: '1950-01-01',
      endDate: '1998-12-31'
    });
    return this;
  },

  saveUser: function() {
    var params = JSON.stringify(this.$el.find("form#player").serializeObject());
    var player = new Player(params)
    player.save(null,{
      success: function (model, respose, options) {
        console.log("The model has been saved to the server");
      },
      error: function (model, xhr, options) {
        console.log("Something went wrong while saving the model");
      }
    });
  }
})