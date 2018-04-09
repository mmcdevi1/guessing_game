(function () {

  /**
   * Sets up a brand new Game.
   */
  function Game () {
    this.template   = new app.Template();
    this.model      = new app.Model();
    this.view       = new app.View(this.template);
    this.controller = new app.Controller(this.model, this.view);
  }

  // Create new Game
  var game = new Game();

  function setGame () {
    game.controller.setGame();
  }

  window.addEventListener('load', setGame);
})();