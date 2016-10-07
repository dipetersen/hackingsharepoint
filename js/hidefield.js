(function () {

    // jQuery library is required in this sample
    // Fallback to loading jQuery from a CDN path if the local is unavailable
    (window.jQuery || document.write('<script src="//code.jquery.com/jquery-2.2.2.min.js"><\/script>'));

    // Create object that have the context information about the field that we want to change it's output render
    var hiddenFieldContext = {};
    hiddenFieldContext.Templates = {};
    hiddenFieldContext.Templates.OnPostRender = hiddenFieldOnPreRender;
    hiddenFieldContext.Templates.Fields = {
        // Apply the new rendering for Age field on New and Edit forms
        "Predecessors": {
            "NewForm": hiddenFieldTemplate,
            "EditForm": hiddenFieldTemplate
        }
    };

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(hiddenFieldContext);

})();


// This function provides the rendering logic
function hiddenFieldTemplate() {
    return "<span class='csrHiddenField'></span>";
}

// This function provides the rendering logic
function hiddenFieldOnPreRender(ctx) {
    jQuery(".csrHiddenField").closest("tr").hide();
}
