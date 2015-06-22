var AppRouter = Backbone.Router.extend({
  routes: {
    "": "playersIndex",
    "players":  "playersIndex",
    "players/:id":  "playersShow",
    "players/:id/edit":  "playersEdit",
    "teams":    "teamsIndex",
    "teams/:id":  "teamsShow",
    "teams/:id/edit":  "teamsEdit",
    "matches":    "matchesIndex",
    "matches/:id":  "matchesShow",
    "matches/:id/edit":  "matchesEdit",
  },

  playersIndex: function () {
    $("section#main .container h1").html("Players");
    var player_view = new PlayersIndexView({
      el: $('#main .app'),
      collection: Players
    })
  },

  teamsIndex: function () {
    $("section#main .container h1").html("Teams");
    var teams_view = new TeamsIndexView({
      el: $('#main .app'),
      collection: Teams
    })
  },

  matchesIndex: function () {
    $("section#main .container h1").html("Matches");
    var matches_view = new MatchIndexView({
      el: $('#main .app'),
      collection: Matches
    })
  },


  playersShow: function () {
    $("section#main .container h1").html("Viewing");
    this.renderView(new PlayerView());
  },

  teamsShow: function () {
    $("section#main .container h1").html("Viewing");
    this.renderView(new TeamView());
  },

  matchesShow: function () {
    $("section#main .container h1").html("Viewing");
    this.renderView(new MatchView());
  },

  playersEdit: function () {
    $("section#main .container h1").html("Editing");
    this.renderView(new PlayerEdit());
  },

  teamsEdit: function () {
    $("section#main .container h1").html("Editing");
    this.renderView(new TeamEdit());
  },

  matchesEdit: function () {
    $("section#main .container h1").html("Editing");
    this.renderView(new MatchEdit());
  },

});

var appRouter = new AppRouter();

Backbone.history.start({pushState: true, root: '/'});

$(document).ready(function(){
  $(".navigate").each(function(){
    $(this).click(function(e){
      e.preventDefault();
      $('#main .app').html('loading...');
      var route = this.href.split(/\/+/g);
      appRouter.navigate(route[route.length-1], {trigger: true});
    });
  });
})