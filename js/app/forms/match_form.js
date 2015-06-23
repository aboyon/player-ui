var PlayerForm = Backbone.Form.extend({
  redirectOnSuccess: "/players",

  schema: {
    local_team: {
      type: 'Select',
      options: ['ARG', 'US', 'ENG','GER','SPA','POR','BRA','ESP'],
      editorAttrs: {
        class: "form-control"
      },
      template: FormCommonComponent
    },
    name:  { 
      type: 'Text', 
      editorAttrs: {
        placeholder: "e.g. Ricardo Bochini",
        class: "form-control"
      },
      template: FormCommonComponent,
      validators: ["required"]
    },
    dob:   { 
      type: 'Datepicker', 
      editorAttrs: {
        placeholder: "e.g. 1980-10-16",
        class: "form-control",
        readonly: true
      },
      template: FormCommonComponent,
      validators: ["required"]
    }
  },
});

_.extend(PlayerForm.prototype, _AppFormDefinition);