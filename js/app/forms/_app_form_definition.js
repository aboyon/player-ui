var _AppFormDefinition = {
  redirectOnSuccess: "/",

  events: {
    "submit": "submitForm"
  },

  submitForm:function(e) {
    e.preventDefault();
    this.commit();
    var self = this;
    this.model.save(null, {
      success: function(model) {
        appRouter.navigate(self.redirectOnSuccess,{trigger: true})
      },
      error: function(model, error) {
        ErrorHandling.showModalError(error.responseJSON.error);
      }
    })
  }
}