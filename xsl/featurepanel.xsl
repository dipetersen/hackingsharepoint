<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xsl">
    <xsl:output method="html" indent="yes"/>

    <!-- This template is the "wrapper" or "container" for the custom view. -->
    <xsl:template match="/">
	<style type="text/css">

		a:visited.btn-primary {
			color: #fff;
		}

		div.row {
			padding-top:  25px;
		}

		.ms-WPBody .img-responsive,
		.ms-wpContentDivSpace .img-responsive,
		.ms-WPBorderBorderOnly .img-responsive,
		.set-image-width .img-responsive,
		img[id^="MSOImageWebPart_"]{
			width:100%
		}




	</style>
        <!-- This is the actual wrapper element that will be emitted -->

        <div class="row">

            <!-- Jump to repeating content -->
            <xsl:apply-templates/>

        <!-- end wrapper -->
        </div>

    </xsl:template>

    <!-- This template is for the repeating content -->
    <xsl:template match="Row">

	  <div class="col-sm-6 col-md-3 set-image-width">
		<div class="thumbnail">
		<a href="{@FeaturedLink}"><img class="img-responsive" src="{@Image}" alt="..."/></a>
		  <div class="caption">
			<h3><a href="{@FeaturedLink}"><xsl:value-of select="@Title"/></a></h3>
			<p><xsl:value-of select="@Body" disable-output-escaping="yes"/></p>
			<p>
				<a href="{@ParentLink}" class="btn btn-primary" role="button">
					<xsl:value-of select="@ParentButtonName"/>
				</a>
			</p>
		  </div>
		</div>
	  </div>

    </xsl:template>
</xsl:stylesheet>
