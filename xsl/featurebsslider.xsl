<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xsl">
    <xsl:output method="html" indent="yes"/>

    <!-- This template is the "wrapper" or "container" for the custom view. -->
	<!-- This file uses bootstrap to render a carousel.  See the bootstrap website for the HTML and fields required -->
    <xsl:template match="/">

        <!-- This is the actual wrapper element that will be emitted -->
        <div id="MyCarousel" class="carousel slide" data-ride="carousel">

		    <!-- Indicators -->
			<ol class="carousel-indicators">
			  <li data-target="#MyCarousel" data-slide-to="0" class="active"></li>
			  <li data-target="#MyCarousel" data-slide-to="1" class=""></li>
			  <li data-target="#MyCarousel" data-slide-to="2" class=""></li>
			  <li data-target="#MyCarousel" data-slide-to="3" class=""></li>
			</ol>


			<div class="carousel-inner" role="listbox">
            <!-- Jump to repeating content -->
				<xsl:apply-templates/>

			</div>
        <!-- end wrapper -->
		    <!-- Controls -->
			<a class="left carousel-control" href="#MyCarousel" data-slide="prev"></a>
			<a class="right carousel-control" href="#MyCarousel" data-slide="next"></a>

        </div>
        <style type="text/css">
          /*
          .Firefox #MyCarousel { max-width:94% }
          .IE #MyCarousel { max-width:94% }
          */
        </style>


    </xsl:template>

    <!-- This template is for the repeating content -->
    <xsl:template match="Row">

		<div class="item">
			<xsl:if test="position()=1">
				<xsl:attribute name="class">item active</xsl:attribute>
			</xsl:if>
			<img src="{@SliderImage}" alt="" class="img-responsive" />
			<div class="carousel-caption">
				<h2 class="bs-featurette-title"><xsl:value-of select="@Title"/></h2>
				<p class="lead"><xsl:value-of select="@Body" disable-output-escaping="yes"/></p>
			</div>
        </div>

    </xsl:template>
</xsl:stylesheet>
