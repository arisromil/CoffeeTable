
  jQuery.fn.table2CSV = function(options) {
    var csvData, el, mydata, popup, row2CSV, tmpRow;
    options = jQuery.extend({
      separator: ','
    }, options);
    tmpRow = [];
    csvData = [];
    el = this;
    popup = function(data, downloadurl) {
      if (downloadurl == null) downloadurl = contextPath + '/downloadToCSV.jsp';
      $("#items").append('<form id="exportform" action=' + downloadurl + ' method="post"><input type="hidden" id="exportdata" name="exportdata" /><input type="hidden" id="downloadName" name="downloadName" /><input type="hidden" id="downloadContext" name="downloadContext" /></form>');
      $("#exportdata").val(data);
      $("#exportform").submit().remove();
      return true;
    };
    row2CSV = function(tmpRow) {
      var mystr;
      if (tmpRow.length > 0) {
        mystr = tmpRow.join(options.separator);
        return csvData[csvData.length] = mystr;
      }
    };
    $(el).filter(':visible').find('th').each(function() {
      if ($(this).css('display') !== 'none') {
        return tmpRow[tmpRow.length] = $(this).html();
      }
    });
    row2CSV(tmpRow);
    $(el).find('tr').each(function() {
      tmpRow = [];
      $(this).filter(':visible').find('td').each(function() {
        var x, y;
        x = $(this).html().replace(/\s+/g, " ");
        y = x.replace(/<br>/gi, " ");
        if ($(this).css('display') !== 'none') {
          return tmpRow[tmpRow.length] = y.replace(" ", "");
        }
      });
      return row2CSV(tmpRow);
    });
    mydata = csvData.join('\n');
    return popup(mydata);
  };
