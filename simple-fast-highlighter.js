(function(global) {
  
  var Highlighter = global.Highlighter = function(code, lang) {
    this.code = code;
    this.lang = lang;
  };
  
  var Language = Highlighter.Language = {
    defaults : {
      comment : {
        single : "//",
        multi : ["/*", "*/"]
      },
      quote : ["\"", "'"],
      escape : "\\",
      operator : [".", ",", "=", "(", ")", "{", "}", ";", "+", "-", "<", ">",
        "&", "|", "!", "?", "[", "]", "/", "%", "^", ":", "~"]
    }
  };
  
  Highlighter.copyShallow = function(src, dest) {
    for (var key in src) {
      dest[key] = src[key];
    }
    return dest;
  };
  
  var ltReg = /</g,
      validKeywordReg = /[a-zA-Z\-_]/;
  
  var replaceEntities = function(s) {
    return s.replace(ltReg, "&lt;");
  };
  
  Highlighter.prototype.handleQuote = function(line, startIndex, quote) {
    var i = startIndex, escaped = false;
    if (quote) {
      this.activeQuote = quote;
      i = startIndex + 1
    }
    for (; i < line.length; i++) {
      var c = line.charAt(i);
      if (c === this.lang.escape) {
        escaped = !escaped;
      } else {
        if (c === this.activeQuote && !escaped) {
          this.activeQuote = null;
          break;
        }
        escaped = false;
      }
    }
    return i;
  };
  
  // single is makkelijk: tot einde van de line.
  Highlighter.prototype.handleSingleComment = function(line, startIndex) {
    return line.length - 1;
  };
  
  Highlighter.prototype.handleMultiComment = function(line, startIndex) {
    this.activeMultiComment = true;
    var i = startIndex + 1, commentChars = [];
    for (; i < line.length; i++) {
      var c = line.charAt(i);
      if (c == this.lang.comment.multi[1].charAt(commentChars.length)) {
        commentChars.push(c);
        if (commentChars.length == this.lang.comment.multi[1].length) {
          // einde comment.
          this.activeMultiComment = false;
          break;
        }
      } else {
        commentChars = [];
      }
    }
    return i;
  };
  
  Highlighter.prototype.handleKeyword = function(keyword, newLine) {
    if (this.lang.keyword.indexOf(keyword) > -1) {
      newLine.push("<span class='sfhkeyword'>" + replaceEntities(keyword) + "</span>");
    } else {
      // Het is geen keyword, dus nu kjken of hier operators inzitten
      var operators = [];
      for (tmp = 0; tmp < keyword.length; tmp++) {
        var operator = keyword.charAt(tmp);
        if (this.lang.operator.indexOf(operator) > -1) {
          operators.push("<span class='sfhoperator'>" + replaceEntities(operator) + "</span>");
        } else {
          operators.push(operator);
        }
      }
      newLine.push(operators.join(""));
    }
  };
  
  Highlighter.prototype.handleLine = function(line) {

    var i, newLine = [], c, endIndex, keywordChars = [],
      commentChars = [], tmp;
    for (i = 0; i < line.length; i++) {
      
      c = line.charAt(i);
      
      // Quote?
      if (this.activeQuote || this.lang.quote.indexOf(c) > -1) {
        endIndex = this.handleQuote(line, i, this.activeQuote ? null : c);
        newLine.push("<span class='sfhquote'>" + replaceEntities(line.substring(i, endIndex + 1))
          + "</span>");
        i = endIndex;
        continue;
      }
      
      // Comment?      
      if (this.activeMultiComment
        || (this.lang.comment.single && c == this.lang.comment.single.charAt(commentChars.length))
        || (this.lang.comment.multi && c == this.lang.comment.multi[0].charAt(commentChars.length))) {
        commentChars.push(c);
        var comment = commentChars.join("");
        var commentFunction = null;
        if (this.activeMultiComment || (this.lang.comment.multi && comment == this.lang.comment.multi[0])) {
          commentFunction = this.handleMultiComment;
        } else if (this.lang.comment.single && comment === this.lang.comment.single) {
          commentFunction = this.handleSingleComment;
        }
        if (commentFunction) {
          commentChars = [];
          endIndex = commentFunction.call(this, line, i);
          // Haal al toegevoegde comment tekens eruit
          for (tmp = 0; tmp < comment.length - 1; tmp++) {
            newLine.pop();
          }
          newLine.push("<span class='sfhcomment'>"
            + replaceEntities(line.substring(i - comment.length + 1, endIndex + 1)) + "</span>");
          i = endIndex;
          continue;
        }
      } else {
        commentChars = [];
      }
      
      // Keyword?
      if (validKeywordReg.test(c)) {
        keywordChars.push(c);
        continue;
      } else if (keywordChars.length > 0) {
        // Eerste NIET keyword valid character
        var keyword = keywordChars.join("");
        keywordChars = [];
        this.handleKeyword(keyword, newLine);
      }
      
      // Operator?
      if (this.lang.operator.indexOf(c) > -1) {
        newLine.push("<span class='sfhoperator'>" + replaceEntities(c) + "</span>");
      } else {
        newLine.push(replaceEntities(c));
      }
    }
    
    // Hier kan nog een keywordChars zijn...
    if (keywordChars.length > 0) {
      this.handleKeyword(keywordChars.join(""), newLine);
    }
    
    return newLine.join("");
  };
  
  Highlighter.prototype.highlight = function() {
    var oldLines = this.code.textContent.split("\n"),
        newLines = [];
    oldLines.forEach(function(oldLine) {
      newLines.push(this.handleLine(oldLine));
    }, this);
    this.code.className += " simplefasthighlighted";
    this.code.innerHTML = newLines.join("\n");
  };
  
  Highlighter.init = function() {
    var codes = document.getElementsByTagName("code"),
        highlighter;
    Array.prototype.forEach.call(codes, function(code) {
      if (code.className in Language) {
        highlighter = new Highlighter(code,
          Language[code.className]);
        highlighter.highlight();
      }
    });
  };
  
}(this));
