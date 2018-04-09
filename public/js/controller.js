(function (window) {

  function Controller (model, view) {
    var self = this;
    self.model = model;
    self.view = view;

    console.log(self.model.winningNumber)

    // Listening for the Enter key to be pressed
    self.view.bind('enterKeyPress', function (guess) {
      
      self.guessNumber(guess);
      self.gameOver();
      
      console.log(self.model.winningNumber, self.model.pastGuesses);
    })

    // Listening for the reset btn to be pressed
    self.view.bind('reset', function () {
      self.reset();
    })

    self.view.bind('hint', function () {
      self.provideHint();
    })
  }

  Controller.prototype.setGame = function () {
    var self = this;
    // $('#content_container').html('<button class="new_game">New Game</button>');
    // $('.new_game').on('click', function () {
    //   $('#content_container').html('game')
    // })
  }

  Controller.prototype.guessNumber = function (guess) {
    // guess will be passed in the View.prototype.bind('enterKeyPress')  
    // callback function
    var self = this;

    self.model.logger(guess);
    self.model.save(guess, function (lastGuess) {
      self.view.render('showGuesses', lastGuess); // render last guesses
      self.view.render('showMessage', self.model.checkGuess())
    });
    self.view.render('clearInput', ''); // clear input field after guess
  }

  Controller.prototype.gameOver = function (guess) {
    var self = this;

    self.model.isGameOver(function (message) {
      self.view.render('showMessage', message);
      self.view.render('disableInput');
      self.view.render('newGameBtn');
      self.view.render('toggleHintBtn', true)
    });
  }

  Controller.prototype.reset = function () {
    // reset game without refresh by pressing reset button
    var self = this;

    self.model.reset(function () {
      self.view.render('enableInput')
      self.view.render('clearInfo')
      self.view.render('clearInput', '');
      self.view.render('focus');
      self.view.render('toggleHintBtn', false)
    });
  }

  Controller.prototype.provideHint = function () {
    var self = this;

    self.model.provideHint(function (hint) {
      self.view.render('provideHint', hint)
      self.view.render('focus')
    })
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window)





















































