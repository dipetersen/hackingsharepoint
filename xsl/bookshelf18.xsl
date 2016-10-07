<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xsl">
    <xsl:output method="html" indent="yes"/>

    <!-- This template is the "wrapper" or "container" for the custom view. -->
    <xsl:template match="/">

        <!-- This is the actual wrapper element that will be emitted -->
		<!--  The TABLE holds the list items and has an image of a bookshelf as the background -->
        <table style="background:url(../siteassets/images/Bookshelf2.jpg); background-repeat: no-repeat; padding-left:45px; padding-right:58px;" height="828" width="1103" border="0" cellspacing="0" cellpadding="3">
            <tbody>
                <tr height="52px">
                    <td colspan="3">
                    </td>
                </tr>
            <!-- Jump to repeating content -->
			<!--  By using position() mod 6, we apply this to every sixth row -->
        <xsl:apply-templates select="//Rows/Row[position() mod 6 = 1]" mode="row" />
              <tr height="36px">
                <td colspan="3">
                </td>
              </tr>
            </tbody>
            </table>
<!-- end wrapper -->


    </xsl:template>

    <!-- This template is for the repeating content -->
    <xsl:template match="Rows/Row" mode="row">
        <tr>
				<!--  This gets applied for each row between the every sixth one above -->
               <xsl:apply-templates select=". | following-sibling::Row[position() &lt; 6]" mode="cell"/>
            </tr>
    </xsl:template>

    <xsl:template match="Row" mode="cell">
        <xsl:choose>
		 <!-- We run a test to see if the Active flag has been set and then display the appropriate image.  If it is an active report, we wrap it in a link -->
          <xsl:when test="@Active = 'Yes'">
            <td height="240px" width="156px" align="center"
              style="vertical-align:center;background-image:url(../siteassets/images/iconsReportBlank.gif);
                background-repeat:no-repeat;background-position:bottom">
              <a href="{@FileRef}" target="_blank" style="color:#000000; text-decoration:none;" >
                <div style="max-width:100px;">
                  <xsl:value-of select="@FileLeafRef.Name" />
                </div>
              </a>
            </td>
          </xsl:when>
          <xsl:otherwise>
            <td height="240px" width="156px" align="center"
              style="vertical-align:center;background-image:url(../siteassets/images/iconsReportBlankInactive.gif);
                background-repeat:no-repeat;background-position:bottom">
            </td>
          </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>
