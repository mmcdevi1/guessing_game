(function (window) {
  // NOTE: $ is NOT jQuery, $ are helper methods in jq.js file
  // my own attempt at recreating popular jQuery methods.

  function View (template) {
    this.template = template;
    this.enterKey = 13;
    this.escapeKey = 27;

    this.$guessInput = '#guess_input';
    this.$show_guesses_list = '#show_guesses_list';
    this.$showMessage = '#show_message';
    this.$new_game = '.new_game';
    this.$info = '.info';
    this.$hint_message = '.hint_message';
    this.$hint = '#hint';
  }

  View.prototype.render = function (viewCmd, parameter) {
    var self = this;
    var viewCommands = {
      clearInput: function () {
        $(self.$guessInput).val(parameter);
      },

      focus: function () {
        $(self.$guessInput).focus();
      },

      showGuesses: function () {
        $(self.$show_guesses_list).append(self.template.showGuess(parameter));
      },

      showMessage: function () {
        $(self.$showMessage).html(parameter)
      },

      toggleHintBtn: function () {
        document.querySelector(self.$hint).disabled = parameter;
      },

      disableInput: function () {
        document.querySelector(self.$guessInput).disabled = true;
      },

      enableInput: function () {
        document.querySelector(self.$guessInput).disabled = false;
      },

      newGameBtn: function () {
        $(self.$new_game).append(self.template.newGameBtn())
      },

      provideHint: function () {
        $(self.$showMessage).html(self.template.hintMessage(parameter))
      },

      clearInfo: function () {
        $(self.$showMessage).html('');
        $(self.$new_game).html('');
        $(self.$show_guesses_list).html('');
      }
    }
    
    viewCommands[viewCmd]();
  }

  View.prototype.bind = function (event, callback) {
    var self = this;
    var viewCommands = {
      enterKeyPress: function () {
        $(self.$guessInput).keypress(function (e) {
          if (e.keyCode === self.enterKey) {
            callback( parseInt($(self.$guessInput).val()) );
          }
        })
      },

      reset: function () {
        $(self.$new_game).on('click', function (e) {
          if (e.target.id === 'new_game_btn') {
            callback();
          }
        })
      },

      hint: function () {
        $(self.$hint).on('click', function () {
          callback();
        })
      }
    }

    viewCommands[event]();
  }

  window.app = window.app || {};
  window.app.View = View;
})(window);














































