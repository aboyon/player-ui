var PlayerIndexTemplate = _.template("\
  <table class='table table-striped'>\
    <% _.each(players, function(player) { %>\
      <tr>\
        <td><%= player.name %></td>\
        <td><%= player.dob %></td>\
        <td><%= player.nationality %></td>\
        <td>\
          <a class='btn btn-small btn-default edit-player-btn' data-player-id='<%= player.id %>' href='javascript:;'>Edit</a>\
          <a class='btn btn-small btn-primary show-player-btn' data-player-id='<%= player.id %>' href='javascript:;'>View</a>\
        </td>\
      </tr>\
    <%  }); %>\
  </table>\
");

var TeamIndexTemplate = _.template("\
  <table class='table table-striped'>\
    <% _.each(teams, function(team) { %>\
      <tr>\
        <td><%= team.name %></td>\
        <td>\
          <a class='btn btn-small btn-default pull-right edit-team-btn' data-team-id='<%= team.id %>' href='javascript:;'>Edit</a>\
          <a class='btn btn-small btn-primary pull-right show-team-btn' data-team-id='<%= team.id %>' href='javascript:;'>View</a>\
        </td>\
      </tr>\
    <%  }); %>\
  </table>\
");

var MatchIndexTemplate = _.template("\
  <table class='table table-striped'>\
      <tr>\
        <th>Local</th>\
        <th>Visitor</th>\
        <th>Date</th>\
        <th>&nbsp;</th>\
      </tr>\
    <% _.each(matches, function(match) { %>\
      <tr>\
        <td><%= match.local.name %></td>\
        <td><%= match.visitor.name %></td>\
        <td><%= match.date %></td>\
        <td>\
          <a class='btn btn-small btn-default pull-right edit-team-btn' data-match-id='<%= match.id %>' href='javascript:;'>Edit</a>\
          <a class='btn btn-small btn-primary pull-right show-team-btn' data-match-id='<%= match.id %>' href='javascript:;'>View</a>\
        </td>\
      </tr>\
    <%  }); %>\
  </table>\
");


var PlayerViewTemplate = _.template("\
  <h2><%= player.name %></h2>\
  <hr>\
  <ul>\
    <li><%= player.dob %></li>\
    <li><%= player.nationality %></li>\
  </ul>\
");