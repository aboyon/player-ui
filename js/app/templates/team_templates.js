var TeamIndexTemplate = _.template("\
  <table class='table table-striped'>\
    <% _.each(teams, function(team) { %>\
      <tr>\
        <td><%= team.name %></td>\
        <td>\
          <a class='navigate btn btn-small btn-default pull-right edit-team-btn' data-team-id='<%= team.id %>' href='/teams/<%= team.id %>/edit'>Edit</a>\
          <a class='navigate btn btn-small btn-primary pull-right show-team-btn' data-team-id='<%= team.id %>' href='/teams/<%= team.id %>'>View</a>\
        </td>\
      </tr>\
    <%  }); %>\
  </table>\
");

var TeamOptionsTemplate = _.template("\
  <div class='panel panel-default'>\
    <div class='panel-body'>\
      <div class='row>\
        <div class='col-md-10 messages-box'></div>\
        <div class='col-md-2 pull-right'>\
          <a href='/teams/new' class='btn btn-primary navigate pull-right'>Create teams</a>\
        </div>\
      </div>\
    </div>\
  </div>\
");