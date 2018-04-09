(function (window) {

  function Template () {

  }

  Template.prototype.showGuess = function (guess) {
    var show
    = '<li>'
    +   '{{guess}}'
    + '</li>';

    show = show.replace('{{guess}}', guess);
    return show;
  }

  Template.prototype.newGameBtn = function () {
    var btn
    = '<button id="new_game_btn">'
    +   'New Game'
    + '</button>';

    return btn;
  }

  Template.prototype.hintMessage = function (guess) {
    var message
    = '<span>'
    +   'The number is .. {{guess}}'
    + '</span>';

    message = message.replace('{{guess}}', guess);
    return message;
  }

  window.app = window.app || {};
  window.app.Template = Template;
})(window)