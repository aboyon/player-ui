var TeamForm = Backbone.Form.extend({
  redirectOnSuccess: "/teams",

  schema: {
    name:  {
      type: 'Text', 
      editorAttrs: {
        placeholder: "e.g. Club Atletico Independiente",
        class: "form-control"
      },
      template: FormCommonComponent,
      validators: ["required"]
    }
  }
})

_.extend(TeamForm.prototype, _AppFormDefinition);