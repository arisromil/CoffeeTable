jQuery.fn.table2CSV = function(options) {
    var options = jQuery.extend({
        separator: ',',
        header: [],
        delivery: 'popup' // popup, value
    },
    options);

    var csvData = [];
    var headerArr = [];
    var el = this;

    //header
    var numCols = options.header.length;
    var tmpRow = []; // construct header avalible array

    if (numCols > 0) {
        for (var i = 0; i < numCols; i++) {
            tmpRow[tmpRow.length] = options.header[i];
        }
    } else {
        $(el).filter(':visible').find('th').each(function() {
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = $(this).html();
        });
    }

    row2CSV(tmpRow);

    // actual data
    $(el).find('tr').each(function() {
        var tmpRow = [];
        $(this).filter(':visible').find('td').each(function() {

			//Replace all double white spaces with single spaces
			var x = $(this).html().replace(/\s+/g," ");
			
			//Replace all <br> tags with empty space, case insensitivity applied
			var y = x.replace(/<br>/gi, " ");
			       
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = y.replace("&nbsp;", "");
			
        });
        row2CSV(tmpRow);
    });
    if (options.delivery == 'popup') {
        var mydata = csvData.join('\n');
        return popup(mydata);
    } else {
        var mydata = csvData.join('\n');
        return mydata;
    }




    function row2CSV(tmpRow) {
        var tmp = tmpRow.join('') // to remove any blank rows
        if (tmpRow.length > 0 && tmp != '') {
            var mystr = tmpRow.join(options.separator);
            csvData[csvData.length] = mystr;
        }
    }

	
    function popup(data) {
       var downloadurl =  contextPath + "/downloadToCSV.jsp";
	
       $("#items").append('<form id="exportform" action='+ downloadurl + ' method="post"><input type="hidden" id="exportdata" name="exportdata" /><input type="hidden" id="downloadName" name="downloadName" /><input type="hidden" id="downloadContext" name="downloadContext" /></form>');
       $("#exportdata").val(data);
       $("#exportform").submit().remove();	   
       
       return true; 
    }
	

	
};