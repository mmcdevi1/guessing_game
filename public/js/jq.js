(function (window) {
  function JQ (selector) {
    return new JQ.init(selector);
  }

  JQ.prototype = {
    on: function (type, fn) {
      var self = this;
      fn = fn || '';
      document.querySelector(self.selector).addEventListener(type, fn)
    },

    html: function (text) {
      var self = this;
      document.querySelector(self.selector).innerHTML = text;
    },

    append: function (text) {
      var self = this;
      document.querySelector(self.selector).innerHTML += text;
    },

    keypress: function (fn) {
      var self = this;
      document.querySelector(self.selector).addEventListener('keypress', fn);
    },

    val: function (text) {
      var self = this;
      if (text === '') {
        document.querySelector(self.selector).value = '';
      } else {
        return document.querySelector(self.selector).value;
      }
    },

    disabled: function (value) {
      var self = this;
      document.querySelector(self.selector).disabled = value;
    },

    focus: function () {
      var self = this;
      document.querySelector(self.selector).focus();
    }
  }

  JQ.init = function (selector) {
    this.selector = selector;
  }

  JQ.init.prototype = JQ.prototype;

  window.JQ = window.$ = JQ;
})(window)