(function (window) {

  function Model () {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = this.generateWinningNumber();
  }

  Model.prototype.generateWinningNumber = function () {
    return Math.floor(Math.random() * 100) + 1;
  }

  Model.prototype.save = function (guess, callback) {
    var self = this;     
    self.playersGuess = guess;

    if (!self.isWinner() && !self.sameGuess() && !self.invalidGuess()) {
      self.pastGuesses.push(self.playersGuess);
      callback(self.read());
    }

  }

  Model.prototype.isWinner = function () {
    var self = this;
    return self.playersGuess === self.winningNumber
  }

  Model.prototype.sameGuess = function () {
    var self = this;
    return self.pastGuesses.includes(self.playersGuess)
  }

  Model.prototype.invalidGuess = function () {
    var self = this;
    return (
      isNaN(self.playersGuess) || 
      self.playersGuess > 100  || 
      self.playersGuess < 1
    )
  }

  Model.prototype.isGameOver = function (callback) {
    var self = this;
    if (self.isWinner()) {
      callback('You Win!')
    } else if (self.loser()) {
      callback('You Lose')
    }
  }

  Model.prototype.loser = function () {
    var self = this;
    return self.pastGuesses.length >= 5;
  }

  Model.prototype.checkGuess = function () {        
    switch (true) {
      case (this.difference() < 10):
        return 'You\'re burning up!';
      case (this.difference() < 25):
        return 'You\'re lukewarm.';
      case (this.difference() < 50):
        return 'You\'re a bit chilly.';
      default:
        return 'You\'re ice cold!';
    }
  }

  Model.prototype.read = function () {
    var self = this;
    return self.pastGuesses[self.pastGuesses.length - 1]
  }

  Model.prototype.reset = function (callback) {
    var self = this;
    self.pastGuesses = [];

    self.winningNumber = this.generateWinningNumber();
    callback();
  }

  Model.prototype.logger = function (guess) {
    var self = this;

    if (guess === self.winningNumber) {
      console.log('correct')
    } else {
      console.log('fail')
    }
  }

  Model.prototype.difference = function () {
    return Math.abs(this.playersGuess - this.winningNumber);
  }

  Model.prototype.isLower = function () {
    return this.playersGuess < this.winningNumber;
  }



  Model.prototype.provideHint = function (callback) {
    var arr = shuffle([this.winningNumber, this.generateWinningNumber() - 1, this.generateWinningNumber() + 1]);
    callback(arr)
  }

  window.app = window.app || {};
  window.app.Model = Model;
})(window)