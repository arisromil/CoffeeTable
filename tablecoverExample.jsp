

<html>
<head><title>Table Cover</title></head>
<script type="text/javascript" src="jquery-1.7.min.js"></script>
<script type="text/javascript" src="jquery.table2csv.js"></script>

 <script type="text/javascript">
 $(document).ready(function(){
    $("p").click(function(){
       jQuery("#items").table2CSV();
    });
 });
 </script>
<body bgcolor="white">
<div align="center">
<p>Download</p>
<TABLE CELLSPACING="0" CELLPADDING="0" BORDER="1" name="items" id="items">
<CAPTION></CAPTION>
<THEAD>
    <TR>    
      <TH>2010</TH>
      <TH>2011</TH>
      <TH>2012</TH>
    </TR>
</THEAD>

<TBODY>
    <TR>    
        <TD>2010 Data Row 1</TD>
        <TD>2010 Data Row 2</TD>
        <TD>2010 Data Row 3</TD>
    </TR>

    <TR>
        <TD>2011 Data Row 1</TD>
        <TD>2011 Data Row 2</TD>
        <TD>2011 Data Row 3</TD>    
    </TR>

    <TR>
        <TD>2012 Data Row 1</TD>
        <TD>2012 Data Row 1</TD>
        <TD>2012 Data Row 1</TD>
    </TR>

</TBODY>
</TABLE>
</div>
</body>
	<script type = "text/javascript" >
		var contextPath = "<%=request.getContextPath()%>";
	</script>
</html>
