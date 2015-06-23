var PlayerForm = Backbone.Form.extend({

  events: {
    "submit": "submitForm"
  },

  schema: {
    nationality: { type: 'Select', options: ['ARG', 'US', 'ENG','GER','SPA','POR','BRA','ESP'] },
    name:  { 
      type: 'Text', 
      editorAttrs: {
        placeholder: "e.g. Ricardo Bochini"
      },
      validators: ["required"]
    },
    dob:   { 
      type: 'Datepicker', 
      editorAttrs: {
        placeholder: "e.g. 1980-10-16"
      },
      validators: ["required"]
    }
  },

  submitForm:function(e) {
    e.preventDefault();
    this.commit();
    console.log(this.model);
    this.model.save(null, {
      success: function(model) {
        appRouter.navigate("/players",{trigger: true})
      },
      error: function(model) {
        alert("Ups something is wrong")
      }
    })
  }
})