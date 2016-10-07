(function() {
  'use strict';
  // get current Url
  var options = {};
  options.OnPostRender = writeDependencies;
  options.Templates = {};
  options.Templates.Header = "<h1>Announcements</h1>";
  options.Templates.Item = renderTile;
  options.Templates.Footer = "";
  

  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(options);
})();

var currentUrl = encodeURIComponent(window.location.href);

function renderTile(ctx){
  var regex = /(<([^>]+)>)/ig;
  var title = ctx.CurrentItem["Title"];
  var body = ctx.CurrentItem["Body"];
  var link = "../Lists/Announcements/DispForm.aspx?ID=" + ctx.CurrentItem["ID"] + "&Source=" + currentUrl;
  var color = ctx.CurrentItem["BackgroundColor"];
  var picture = ctx.CurrentItem["BackgroundPicture"];
  
  // make the body a uniform length
  body = body.replace(regex,"");
  if(body && body.length > 60) {
      body = body.substring(0,60) + "<a href='" + link + "'> ...</a>";
  }
  
var ret = [];
  ret.push("<div class=\"flip-container\"><div class=\"flippper\">");
  ret.push("<div class=\"front\">");
  // front content
  ret.push("<h3>");
  ret.push(title);
  ret.push("</h3>");
  // end front content
  ret.push("</div>"); 
  ret.push("<div class=\"back\">");
  // back content 
  ret.push("<h3>");
  ret.push(title);
  ret.push("</h3>");
  ret.push("<p>");
  ret.push(body);
  ret.push("</p>");
  // end back content
  ret.push("</div>");
  ret.push("</div></div>");
  return ret.join("");
}


function writeDependencies(){
    // This is where you can load all your dependentent Javascript and CSS
    //document.write("<link rel='stylesheet' href='../siteassets/css/flipper.css'>");
    //document.write("<link rel='stylesheet' href='../siteassets/css/announcements.csr.css'>");
    
}


