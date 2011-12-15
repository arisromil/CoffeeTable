jQuery.fn.table2CSV = (options) ->
     options = jQuery.extend({
            separator: ','
     },
     options)
     tmpRow = [];
     csvData = [];
     el = this;
     popup = (data, downloadurl = contextPath + '/downloadToCSV.jsp')->
         $("#items").append('<form id="exportform" action='+ downloadurl + ' method="post"><input type="hidden" id="exportdata" name="exportdata" /><input type="hidden" id="downloadName" name="downloadName" /><input type="hidden" id="downloadContext" name="downloadContext" /></form>');
         $("#exportdata").val(data);
         $("#exportform").submit().remove();
         return true;
         
     row2CSV = (tmpRow) ->
       if (tmpRow.length > 0 ) 
            mystr = tmpRow.join(options.separator);
            csvData[csvData.length] = mystr;

     $(el).filter(':visible').find('th').each(-> 
            if ($(this).css('display') != 'none')
                tmpRow[tmpRow.length] = $(this).html();
     )
     row2CSV(tmpRow);
     #actual data
     $(el).find('tr').each(-> 
            tmpRow = [];
            $(this).filter(':visible').find('td').each(-> 
                 #Replace all double white spaces with single spaces
                 x = $(this).html().replace(/\s+/g," ");
                 #Replace all <br> tags with empty space, case insensitivity applied
                 y = x.replace(/<br>/gi, " ");
                 if ($(this).css('display') != 'none')
                       tmpRow[tmpRow.length] = y.replace(" ", "");
            )
            row2CSV(tmpRow);
     )
     mydata = csvData.join('\n');
     return popup(mydata);
