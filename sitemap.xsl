<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html>
<head>
<title>XML Sitemap</title>
<style type="text/css">
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 20px; }
h1 { color: #333; border-bottom: 2px solid #4a90d9; padding-bottom: 10px; }
table { border-collapse: collapse; width: 100%; margin-top: 20px; }
th { background: #4a90d9; color: white; padding: 12px; text-align: left; }
td { padding: 10px; border-bottom: 1px solid #ddd; }
tr:hover { background: #f5f5f5; }
a { color: #4a90d9; text-decoration: none; }
a:hover { text-decoration: underline; }
.count { color: #666; margin-bottom: 20px; }
</style>
</head>
<body>
<h1>XML Sitemap</h1>
<p class="count">Number of URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></p>
<table>
<tr><th>URL</th><th>Last Modified</th><th>Change Freq</th><th>Priority</th></tr>
<xsl:for-each select="sitemap:urlset/sitemap:url">
<tr>
<td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
<td><xsl:value-of select="sitemap:lastmod"/></td>
<td><xsl:value-of select="sitemap:changefreq"/></td>
<td><xsl:value-of select="sitemap:priority"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
