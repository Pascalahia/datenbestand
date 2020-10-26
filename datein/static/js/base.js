function myfunction(){
var start = mydata_object;
    console.log(start)
data = start["information"];
    var qlist =[];
    var rawqlist = [];
    for(var key in data){
        if (key == "gender_information"){
            console.log("was gefunden und zwar " + key );
            var innerdata = data[key]["information"];
            var N = Object.keys(innerdata).length;
            var n = 0;
            var innerS = 0;

            for (var index in innerdata ){
                n = n+ innerdata[index];
            }

            var m = n/N;

            for (var index in innerdata ){
                innerS = innerS + ((innerdata[index]-m)**2);
            }
            var S = Math.sqrt((1/N)*innerS)
            console.log(S);
            console.log((data[key]["information"]));
            console.log("N ist " + N);
            console.log("n ist " + n);
            console.log("m ist " + m);

            var Smax = ((N-1)*m+n-m)*(1/N);
            var finquality = (Smax-S)/Smax;

            var res = "Die Qualität von gender ist " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);
        }else if( key == "age_information"){
            console.log("was gefunden undzwar " + key);
            var innerdata = data[key]["information"];
            var N = Object.keys(innerdata).length;
            var n = 0;
            var innerS = 0;

            for (var index in innerdata ){
                n = n+ innerdata[index];
            }

            var m = n/N;

            for (var index in innerdata ){
                innerS = innerS + ((innerdata[index]-m)**2);
            }
            var S = Math.sqrt((1/N)*innerS)
            console.log(S);
            console.log((data[key]["information"]));
            console.log("N ist " + N);
            console.log("n ist " + n);
            console.log("m ist " + m);

            var Smax = ((N-1)*m+n-m)*(1/N);
            var finquality = (Smax-S)/Smax;

            var res = "Die Qualität von age ist " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);
        }else if (key == "income_information"){
            console.log("was gefunden undzwar " + key);
            var innerdata = data[key]["information"];
            var N = Object.keys(innerdata).length;
            var n = 0;
            var innerS = 0;

            for (var index in innerdata ){
                n = n+ innerdata[index];
            }

            var m = n/N;

            for (var index in innerdata ){
                innerS = innerS + ((innerdata[index]-m)**2);
            }
            var S = Math.sqrt((1/N)*innerS)
            console.log(S);
            console.log((data[key]["information"]));
            console.log("N ist " + N);
            console.log("n ist " + n);
            console.log("m ist " + m);

            var Smax = ((N-1)*m+n-m)*(1/N);
            var finquality = (Smax-S)/Smax;

            var res = "Die Qualität von income ist " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);
        }else if (key == "geography_information"){
            console.log("was gefunden undzwar " + key);
            var innerdata = data[key]["information"];
            var N = Object.keys(innerdata).length;
            var n = 0;
            var innerS = 0;

            for (var index in innerdata ){
                n = n+ innerdata[index];
            }

            var m = n/N;

            for (var index in innerdata ){
                innerS = innerS + ((innerdata[index]-m)**2);
            }
            var S = Math.sqrt((1/N)*innerS)
            console.log(S);
            console.log((data[key]["information"]));
            console.log("N ist " + N);
            console.log("n ist " + n);
            console.log("m ist " + m);

            var Smax = ((N-1)*m+n-m)*(1/N);
            var finquality = (Smax-S)/Smax;

            var res = "Die Qualität von geography ist " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);
        }else{}
    }

    var i = 0;
    var meanq = 0;
    for (i=0; i < rawqlist.length; i++){
        meanq += rawqlist[i];
    }
    meanq = meanq/rawqlist.length;
    console.log(meanq);
    $("#q1").html(qlist + "Die mittlere Qualität beträgt " + meanq);
    $('#q1').css({'visibility': 'visible'});
    }












//var myList = [
 // { "name": "abc", "age": 50 },
 // { "age": "25", "hobby": "swimming" },
  //{ "name": "xyz", "hobby": "programming" }
//];

// Builds the HTML Table out of myList.

/*function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(data_object.information.items, selector);

  for (var i = 0; i < data_object.information.items.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = data_object.information.items[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(data_object.information.items, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < data_object.information.items.length; i++) {
    var rowHash = data_object.information.items[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}*/