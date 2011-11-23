<%
/*
 *  Description: Generic jsp template for scraping HTML tables into a downlaodable csv file
 *
*/

String filename = "download";
String exportdata = request.getParameter("exportdata");
out.println(exportdata);

response.setContentType("text/csv");
response.setHeader("Content-Disposition", "attachment; filename=\""+filename+".csv\"");
%>