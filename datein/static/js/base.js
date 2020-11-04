function myfunction(original_data, show){
    var start = {...original_data};
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
//    debugger;
    if(show) {
        $("#q1").html(qlist + "The average quality is " + meanq);
        $('#q1').css({'visibility': 'visible'});
    }
    return meanq;
}

function quality(full_data){
    let total_quality = 0;
    for (var i = 0; i< full_data.length; i++){
        total_quality+= myfunction(full_data[i],false)
    }
    let total_average = total_quality/ full_data.length;
    $("#Quali").html("The average quality of this groupe of data is " + total_average);
    $("#Quali").css({'visiblility': 'visible'});
}







