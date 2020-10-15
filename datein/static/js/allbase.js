//var data = '/datein/data'
function get_element() {
        var order = $('#inf').text();
        var data = JSON.parse(order.trim().replaceAll("\'", '"'));
        var inf = ''
        for(x of Object.keys(data)) {
            inf += `<h3>${x}</h3> <p>Count: ${data[x].count}</p> <b> <p>Mean: ${data[x].mean}</p> <b> <p>Standard Deviation: ${data[x].std}</p>
            <p>Min Value: ${data[x].min}</p> <b> <p>Max Value: ${data[x].max}</p> <b>
            `;
        }
         $('#inf').html(inf);
         $('#inf').css({'visibility': 'visible'})

}