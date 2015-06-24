var MatchesForm = Backbone.Form.extend({
  redirectOnSuccess: "/matches",

  schema: {
    local_team_id: {
      type: 'TeamSelect',
      options: new TeamsCollection(),
      editorAttrs: {
        class: "form-control"
      },
      template: FormCommonComponent
    }
  }
});

_.extend(MatchesForm.prototype, _AppFormDefinition);