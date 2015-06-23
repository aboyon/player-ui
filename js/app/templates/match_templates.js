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


var MatchOptionsTemplate = _.template("\
  <div class='panel panel-default'>\
    <div class='panel-body'>\
      <div class='row>\
        <div class='col-md-10 messages-box'></div>\
        <div class='col-md-2 pull-right'>\
          <a href='/matches/new' class='btn btn-primary navigate pull-right'>Create match</a>\
        </div>\
      </div>\
    </div>\
  </div>\
");