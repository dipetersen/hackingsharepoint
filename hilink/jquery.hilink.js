(function($) {
  'use strict';

  /*

    terms : json object Array.  Usually this is the results array returned from a REST call.
    matchField:  This is the field in the JSON object that we will use to build the query string for matching
    node: This is a jQuery object representing a DOM node.  we convert it to a DOM node before the matching.
    hiliteTag: tag to use to hilite.  default is EM.
    hiliteClass:  CSS class to style the matched text
    clickFunction:  method called when clicked.  It will be passed the matched text.  function(match){}
  */
  var settings = {};
  var skipTags = {};
  $.fn.hilink = function(options){
    var defaultValues = {
      terms: [],
      matchField: "Title",
      description: "Description",
      node: $("body"),
      hiliteTag: "em",
      hiliteClass: "",
      eventType: "click",
      clickFunction: null
    };
    var settings = $.extend(defaultValues, options);
    if(settings.terms.length===0) return this;
    // iterate through all search terms to highlight words.
    skipTags = new RegExp("^(?:" + settings.hiliteTag + "|SCRIPT|FORM)$");
    var searchString="";
    $.each(settings.terms, function(i,term){
      searchString += term[settings.matchField] + "|";
    });
    searchString = searchString.slice(0,-1);
    //$.each(search.terms, function(i,term){
      // set the regex
      //var query = new RegExp("(\\b" + term[search.title] + "\\b)", "gim");
      var query = setRegex(searchString);
      hilightWords(settings.node[0], query, settings);
    //});
    return this;
  };

  var hilightWords = function(node, matchRegex, settings)
    {
      if(node === undefined || !node){
        return;
      }
      if(!matchRegex) {
        return;
      }
      if(skipTags.test(node.nodeName)) {
        return;
      }

      if(node.hasChildNodes()) {
        for(var i=0; i < node.childNodes.length; i++){
          if(node.childNodes[i] === undefined || !node.childNodes[i]) {
            return;
          }
          hilightWords(node.childNodes[i],matchRegex, settings);
        }
      }
      if(node.nodeType == 3) { // NODE_TEXT
        var nv = node.nodeValue;
        var regs = matchRegex.exec(nv);
        if(nv && regs) {
          var match = document.createElement(settings.hiliteTag);
          match.appendChild(document.createTextNode(regs[0]));
          match.className = settings.hiliteClass;
          if(settings.clickFunction)
          {
            //match.onclick=function(){clickFunction(regs[0]);};
            match.addEventListener(settings.eventType,function(){settings.clickFunction(regs[0]);});
          }
          var after = node.splitText(regs.index);
          after.nodeValue = after.nodeValue.substring(regs[0].length);
          node.parentNode.insertBefore(match, after);
        }
      }
  };

  var setRegex = function(input)
    {
      input = input.replace(/^[^\w]+|[^\w]+$/g, "").replace(/[^\w'-]+/g, "|");
      input = input.replace(/^\||\|$/g, "");
      if(input) {
        var re = "(" + input + ")";
        re = "\\b" + re + "\\b";
        return new RegExp(re, "gim");
      }
      return false;
    };

}(jQuery));
