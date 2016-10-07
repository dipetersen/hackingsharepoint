<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xsl">


    <!-- This template is the "wrapper" or "container" for the custom view. -->
    <xsl:template match="/">

       <svg width="300px" height="350px" xmlns="http://www.w3.org/2000/svg">
           <g id="bar" transform="translate(0,200)">

            <!-- Jump to repeating content -->
            <xsl:apply-templates/>

             </g>
         </svg>

    </xsl:template>

    <!-- This template is for the repeating content -->
    <xsl:template match="/dsQueryResponse/Rows/Row">
               <xsl:comment>
                 Color is: <xsl:value-of select="@Color" />
               </xsl:comment>
               <xsl:variable name="val" select="@Value"/>
               <xsl:variable name="col" select="@Color"/>
               <rect x="{position()*25}" y="-{$val*1.5}" height="{$val*1.5}" width="15" style="fill:{$col};"/>
               <text x="{position()*25 + 7.5}" y="0" style="font-family:arial;text-anchor:middle;baseline-shift:-15;">
                 <xsl:value-of select="@Title"/>
               </text>
    </xsl:template>
</xsl:stylesheet>
