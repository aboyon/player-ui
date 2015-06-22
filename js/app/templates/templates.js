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

var PlayerFormTemplate = _.template("\
  <form id='player'>\
    <% if (player.id) { %>\
    <input type='hidden' name='id' value='<%= player.name %>' />\
    <% } %>\
    <h2>Complete with the player information</h2>\
    <label for='player_name'>Name</label>\
    <input type='text' name='name' id='player_name' placeholder='e.g Lionel Messi' value='<%= player.name %>'/>\
    <label for='player_dob'>Date of birth</label>\
    <input type='text' name='dob' id='player_dob' placeholder='1980-10-16' value='<%= player.dob %>'/>\
    <label for='player_nationality'>Nationality</label>\
    <input type='text' name='nationality' id='player_nationality' placeholder='ARG' value='<%= player.nationality %>'/>\
    <hr />\
    <a class='btn btn-primary save-btn' href='javascript:;'>Save</a>\
   </form>\
");

var PlayerOptionsTemplate = _.template("\
  <section>\
    <div class='row'>\
      <div class='panel'>\
        <a href='/players/new' class='btn btn-primary navigate pull-right'>Create player</a>\
      </div>\
    </div>\
  </section>\
");