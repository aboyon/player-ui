var AppRouter = Backbone.Router.extend({
  routes: {
    "": "playersIndex",
    "players":  "playersIndex",
    "players/new":  "playersNew",
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
      el: $('#main .app .content'),
      collection: Players
    })
  },

  teamsIndex: function () {
    $("section#main .container h1").html("Teams");
    var teams_view = new TeamsIndexView({
      el: $('#main .app .content'),
      collection: Teams
    })
  },

  matchesIndex: function () {
    $("section#main .container h1").html("Matches");
    var matches_view = new MatchIndexView({
      el: $('#main .app .content'),
      collection: Matches
    })
  },


  playersShow: function (id) {
    var player = new Player({id: id})
    var player_view = new PlayerView({
      el: $('#main .app .content'),
      model: player
    })
  },

  teamsShow: function () {
    $("section#main .container h1").html("Viewing");
    this.renderView(new TeamView());
  },

  matchesShow: function () {
    $("section#main .container h1").html("Viewing");
    this.renderView(new MatchView());
  },

  playersEdit: function (id) {
    new Player({id: id}).fetch({
      success: function(player){
        $("section#main .container h1").html("Editing to " + player.get("name"));
        var player_form = new PlayerForm({
          model: player
        }).render();
        $('#main .app .content').html(player_form.el);
      },
      error: function(model, xhr, options) {
        $('#main .app .content').html("Ahh..");
      }
    });
  },

  teamsEdit: function () {
    $("section#main .container h1").html("Editing");
    this.renderView(new TeamEdit());
  },

  matchesEdit: function () {
    $("section#main .container h1").html("Editing");
    this.renderView(new MatchEdit());
  },

  playersNew: function () {
    $("section#main .container h1").html("Create a new player");
    var player_form = new PlayerForm({
      model: new Player()
    }).render();
    $('#main .app .content').html(player_form.el);
  },

  bindNavigationToLinks: function() {
    $(".navigate").each(function(){
      $(this).click(function(e){
        e.preventDefault();
        $('#main .app .content').html('loading...');
        var url = document.createElement("a");
        url.href = this.href;
        appRouter.navigate(url.pathname, {trigger: true});
      });
    });
  },

});

var appRouter = new AppRouter();

Backbone.history.start({pushState: true});

$(document).ready(function(){
  appRouter.bindNavigationToLinks();
})