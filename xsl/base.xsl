<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   <xsl:output omit-xml-declaration="yes" indent="yes" />
   <xsl:strip-space elements="*" />
   <xsl:template match="/">
       <!– This is the wrapper -->
	 <xsl:apply-templates/>
       <!– End wrapper -->
   </xsl:template>
   <xsl:template match=“/dsQueryResponse/Rows/Row”>
        <!– Markup for each item 
   </xsl:template>
</xsl:stylesheet>
