(function() {
  'use strict';
  // Create object that have the context information about the
  // field that we want to change it's output render
  var percentCompleteFieldContext = {};
  percentCompleteFieldContext.Templates = {};
  percentCompleteFieldContext.Templates.Fields = {
    // Apply the new rendering for PercentComplete field on List View, Display, New and Edit forms
    "PercentComplete": {
      "View": percentCompleteViewFieldTemplate,
      "DisplayForm": percentCompleteViewFieldTemplate,
      "NewForm": percentCompleteEditFieldTemplate,
      "EditForm": percentCompleteEditFieldTemplate
    }
  };

  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(percentCompleteFieldContext);


})();

// This function provides the rendering logic for View and Display form
function percentCompleteViewFieldTemplate(ctx) {
  var percentComplete = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];
  return "<div style='background-color: #e5e5e5; width: 100px;  display:inline-block;'> \
          <div style='width: " + percentComplete.replace(/\s+/g, '') + "; background-color: #0094ff;'> \
          &nbsp;</div></div>&nbsp;" + percentComplete;
}

// This function provides the rendering logic for New and Edit forms
function percentCompleteEditFieldTemplate(ctx) {
  var formCtx = SPClientTemplates.Utility.GetFormContextForCurrentField(ctx);
  // Register a callback just before submit.
  formCtx.registerGetValueCallback(formCtx.fieldName, function () {
    return document.getElementById('inpPercentComplete').value;
  });

  return "<input type='range' id='inpPercentComplete' name='inpPercentComplete' min='0' max='100' \
          oninput='outPercentComplete.value=inpPercentComplete.value' value='" + formCtx.fieldValue + "' /> \
          <output name='outPercentComplete' for='inpPercentComplete' >" + formCtx.fieldValue + "</output>%";
}
