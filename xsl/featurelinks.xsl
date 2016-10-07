<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xsl">
    <xsl:output method="html" indent="yes"/>

    <!-- This template is the "wrapper" or "container" for the custom view. -->
    <xsl:template match="/">

        <!-- This is the actual wrapper element that will be emitted -->
        <div>
			<h1 style="padding-bottom: 25px;">Featured Pages</h1>
            <!-- Jump to repeating content -->
            <xsl:apply-templates/>

        <!-- end wrapper -->
        </div>

    </xsl:template>

    <!-- This template is for the repeating content -->
    <xsl:template match="Row">

        <div id="listitem-{@ID}" style="clear: left">
            <a href="{@FeaturedLink}" alt="{@FeaturedLink.desc}"><h2><xsl:value-of select="@Title"/></h2></a><br/>
            <a href="{@FeaturedLink}" style="float:left" alt="{@FeaturedLink.desc}"><img src="{@Image}"
                style="padding: 5px; border:0; width:150px" /></a>
            <xsl:value-of select="@Body" disable-output-escaping="yes"/>
        </div>

    </xsl:template>
</xsl:stylesheet>
