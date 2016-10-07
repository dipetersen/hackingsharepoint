(function() {
  'use strict';
  // get current Url
  var options = {};
  options.Templates = {};
  options.Templates.Header = "<div class='row'>";
  options.Templates.Item = renderItem;
  options.Templates.Footer = "</div>";

  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(options);
})();

var currentUrl=encodeURIComponent(window.location.href);

function renderItem(ctx){
  var regex = /(<([^>]+)>)/ig;
  var title = ctx.CurrentItem["Title"];
  var body = ctx.CurrentItem["Body"];
  var link = "../Lists/Announcements/DispForm.aspx?ID="+ ctx.CurrentItem["ID"]+"&source=" + currentUrl;
  var backcolor = ctx.CurrentItem["BackgroundColor"];
  var image = ctx.CurrentItem["BackgroundPicture"];
  // make the body a uniform length
  body = body.replace(regex,"");
  if(body && body.length > 60) {
      body = body.substring(0,60) + "<a href='" + link + "'> ...</a>";
  }
  // for each item, render one panel.

  var ret = [];
  ret.push("<div class=\"col-sm-3 col-md-3 set-image-width\"><div class=\"thumbnail\">");
  ret.push("<a href=\"");
  ret.push(link);
  ret.push("\">");
  ret.push("<img class=\"img-responsive\" style='width:100%' src=\"");
  ret.push(image);
  ret.push("\" alt=\"...\"/></a><div class=\"caption\"><h4>");
  ret.push("<a href=\"");
  ret.push(link);
  ret.push("\">");
  ret.push(title);
  ret.push("</a></h4><p>");
  ret.push(body);
  ret.push("</p>");
  ret.push("</div></div></div>");

  return ret.join("");
}
