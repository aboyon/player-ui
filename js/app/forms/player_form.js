var PlayerForm = Backbone.Form.extend({

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
  }
})