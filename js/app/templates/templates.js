var PlayerIndexTemplate = _.template("\
  <table class='table table-striped'>\
    <% _.each(players, function(player) { %>\
      <tr>\
        <td><%= player.name %></td>\
        <td><%= player.dob %></td>\
        <td><%= player.nationality %></td>\
        <td>\
          <a class='navigate btn btn-small btn-default edit-player-btn' data-player-id='<%= player.id %>' href='/players/<%= player.id %>/edit'>Edit</a>\
          <a class='navigate btn btn-small btn-primary show-player-btn' data-player-id='<%= player.id %>' href='/players/<%= player.id %>'>View</a>\
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
          <a class='navigate btn btn-small btn-default pull-right edit-team-btn' data-team-id='<%= team.id %>' href='/teams/<%= team.id %>/edit'>Edit</a>\
          <a class='navigate btn btn-small btn-primary pull-right show-team-btn' data-team-id='<%= team.id %>' href='/teams/<%= team.id %>'>View</a>\
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
          <a class='navigate btn btn-small btn-default pull-right edit-team-btn' data-match-id='<%= match.id %>' href='/matches/<%= match.id %>/edit'>Edit</a>\
          <a class='navigate btn btn-small btn-primary pull-right show-team-btn' data-match-id='<%= match.id %>' href='/matches/<%= match.id %>/edit'>View</a>\
        </td>\
      </tr>\
    <%  }); %>\
  </table>\
");


var PlayerViewTemplate = _.template("\
  <hr>\
  <ul>\
    <li>Date of Birth: <%= player.dob %></li>\
    <li>Nationality: <%= player.nationality %></li>\
  </ul>\
");