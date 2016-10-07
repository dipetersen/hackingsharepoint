/*
    This file generates a Bootstrap carosel so Bootstrap and Bootstrap.JS need to be loaded.
    This script does not load those libraries.
*/

(function() {
  'use strict';

    if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
            });
        };
    }

    var options = {
        OnPostRender : PostRender,
        Templates : {
            Header: RenderHeader,
            Item: RenderItem,
            Footer: RenderFooter
        }
    };

  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(options);
})();

var indicators = [];


function RenderHeader(ctx){
	indicators.push('<ol class="carousel-indicators">');
	return '<div id="MyCarousel" class="carousel slide" data-ride="carousel"><div class="carousel-inner" role="listbox">';
}

function RenderItem(ctx) {
	indicators.push('<li data-target="#MyCarousel" data-slide-to="{0}"{1}></li>'.format(ctx.CurrentItemIdx, (ctx.CurrentItemIdx===0 ? ' class="active"':'')));
    var ret = [];
    ret.push('<div class="item' + (ctx.CurrentItemIdx===0 ? ' active' : '') + '">');
    ret.push('<a href="{0}" alt="{1}">'.format(ctx.CurrentItem.FeaturedLink, ctx.CurrentItem["FeaturedLink.desc"]));
    ret.push('<img src="{0}" alt="" class="img-responsive" style="width:100%" />'.format(ctx.CurrentItem.SliderImage));
    ret.push('<div class="carousel-caption">');
    ret.push('<h2 class="bs-featurette-title">{0}</h2>'.format(ctx.CurrentItem.Title));
    ret.push('<p class="lead">{0}</p>'.format(ctx.CurrentItem.Body));
    ret.push('</div></a></div>');
    return ret.join("");
}

function RenderFooter(ctx) {
	indicators.push('</ol>');
    return '</div></div>';
}

function PostRender(ctx){
	var ret = [];
	var style=[];
    ret.push('<a class="left carousel-control" href="#MyCarousel" data-slide="prev"></a>');
    ret.push('<a class="right carousel-control" href="#MyCarousel" data-slide="next"></a>');
    ret.push('</div>');
    style.push('<style type="text/css">');
    style.push('.carousel .item .carousel-caption{background: linear-gradient(to right,rgba(0,0,0,.0001),rgba(0,0,0,.5) 10%,rgba(0,0,0,.8), rgba(0,0,0,.5) 90%, rgba(0,0,0,.0001)); padding:10px}');
    style.push('.Firefox #MyCarousel {max-width:94%} .IE #MyCarousel {max-width:94%}');
    style.push('</style>');
	$('#MyCarousel').prepend(indicators.join("")).append(ret.join("")).parent().append(style.join(""));
}
