function myfunction(){
var start = mydata_object;
    console.log(start)
    data = start["information"];
    var qlist =[];
    var rawqlist = [];
    for(var key in data){
        if (key == "gender_information"){
            console.log("found something and namely " + key );
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

            var res = "The quality of gender is " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);

        }
        else if( key == "age_information"){
            console.log("found something and namely " + key);
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

            //var Smax = ((N-1)*m+n-m)*(1/N);
                        var preSmax = 0;
            var j = 0;

            for (var index in innerdata){
                if (j==0){
                preSmax= preSmax + ((n-m)**2);

                } else{
                    preSmax = preSmax + ((0-m)**2);
                }
                j++;
            }

            var Smax = Math.sqrt((1/N)*preSmax)
            console.log("Smax="+Smax);
            var finquality = (Smax-S)/Smax;

            var res = "The quality of age is " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);

        }
        else if (key == "income_information"){
            console.log("found something and namely " + key);
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

            var preSmax = 0;
            var j = 0;

            for (var index in innerdata){
                if (j==0){
                preSmax= preSmax + ((n-m)**2);

                } else{
                    preSmax = preSmax + ((0-m)**2);
                }
                j++;
            }

            var Smax = Math.sqrt((1/N)*preSmax)
            console.log("Smax="+Smax);
            var finquality = (Smax-S)/Smax;

            var res = "The quality of income is " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);

        }
        else if (key == "geography_information"){
            console.log("found something and namely " + key);
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
            console.log((data[key]["information"]));
            console.log("N ist " + N);
            console.log("n ist " + n);
            console.log("m ist " + m);

            var preSmax = 0;
            var j = 0;

            for (var index in innerdata){
                if (j==0){
                preSmax= preSmax + ((n-m)**2);

                } else{
                    preSmax = preSmax + ((0-m)**2);
                }
                j++;
            }

            var Smax = Math.sqrt((1/N)*preSmax)
            console.log("Smax="+Smax);
            var finquality = (Smax-S)/Smax;

            var res = "The quality of geography is " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);

        }
        else if (key == "density_information"){
            console.log("found something and namely " + key);
            var innerdata = data[key]["information"];
            var N = Object.keys(innerdata).length;
            var n = 0;
            var innerS = 0;

            for (var index in innerdata ){
                n = n+ innerdata[index];
            }

            var m = n/N;
           // var M = Math.floor(m)
            for (var index in innerdata ){
                innerS = innerS + ((innerdata[index]-m)**2);
            }
            var S = Math.sqrt((1/N)*innerS)
            console.log(S);
            console.log((data[key]["information"]));
            console.log("N ist " + N);
            console.log("n ist " + n);
            console.log("m ist " + m);

            var preSmax = 0;
            var j = 0;

            for (var index in innerdata){
                if (j==0){
                preSmax= preSmax + ((n-m)**2);

                } else{
                    preSmax = preSmax + ((0-m)**2);
                }
                j++;
            }

            var Smax = Math.sqrt((1/N)*preSmax)
            console.log("Smax="+Smax);
            var finquality = (Smax-S)/Smax;
            console.log(Smax);
            var res = "The quality of density is " + finquality + " ";
            console.log(res);
            qlist.push(res);
            rawqlist.push(finquality);
        }
        else{}
    }

    var i = 0;
    var meanq = 0;
    for (i=0; i < rawqlist.length; i++){
        meanq += rawqlist[i];
    }
    meanq = meanq/rawqlist.length;
    console.log(meanq);
    $("#q1").html(qlist + "The average quality is " + meanq);
    $('#q1').css({'visibility': 'visible'});
    return meanq;
    }




function quality(){
    var valeur= myfunction();
    alert(valeur)


   /* var gesamtQ = 0;
    var j = 0;
    var counter = data.length
    var pretotal =0;
    if (counter=0){
        gesamtQ= 0;
    } else {
      gesamtQ=

    }*/


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