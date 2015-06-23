var PlayerIndexTemplate = _.template("\
  <table class='table table-striped'>\
    <% _.each(players, function(player) { %>\
      <tr>\
        <td><%= player.name %></td>\
        <td><%= player.dob %></td>\
        <td><%= player.nationality %></td>\
        <td>\
          <div class='btn-group pull-right'>\
            <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
              Actions <span class='caret'></span>\
            </button>\
            <ul class='dropdown-menu'>\
              <li>\
                <a class='navigate edit-player-btn' data-player-id='<%= player.id %>' href='/players/<%= player.id %>/edit'>Edit</a>\
              </li>\
              <li>\
                <a class='navigate show-player-btn' data-player-id='<%= player.id %>' href='/players/<%= player.id %>'>View</a>\
              </li>\
            </ul>\
          </div>\
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

var PlayerOptionsTemplate = _.template("\
  <div class='panel panel-default'>\
    <div class='panel-body'>\
      <div class='row>\
        <div class='col-md-10 messages-box'></div>\
        <div class='col-md-2 pull-right'>\
          <a href='/players/new' class='btn btn-primary navigate pull-right'>Create player</a>\
        </div>\
      </div>\
    </div>\
  </div>\
");