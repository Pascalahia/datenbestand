function myfunction(){

  //  var start = $("#q1");
   // start.html("<h3>Quality of gender:"+  JSON.parse(mydata_object[0])+ "</h3>");
  //  start.show();
    var start = mydata_object;
    console.log(start)
    //console.log(start["information"])


    data = start["information"];
    var qlist =[];

    for(var key in data){
        if (key == "gender_information"){
            console.log("was gefunden undzwar " + key );
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
        }else{}
    }

    $("#q1").html(qlist);
    $('#q1').css({'visibility': 'visible'});
   // var order = $('#q1').text()
    //console.log(order)
    //console.log(order["gender_information"])
}


