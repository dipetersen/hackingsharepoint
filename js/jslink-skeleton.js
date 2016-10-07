/*  This is the template I use to start every jslink project */
(function() {
  'use strict';
  var options = {};
  options.Templates = {};
  options.Templates.Fields = {
    "[Field Name]": { "View": [function]}
    "[Field Name]": { "Edit": [function]}
  };

  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(options);
})();

function [function](ctx){
  // do work with the ctx object
}
