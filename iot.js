$("#red").ionRangeSlider({
  min: 0,
  max: 255,
  from: 125,
  skin: "flat",
  onChange: function (data) {
    $('#test').html(data);
        $('#RGB').css('color', 'rgb('+ $('#red').val() +','+$('#green').val()+','+$('#blue').val()+')');
        console.dir(data.from);
  }
});
$("#green").ionRangeSlider({
    min: 0,
    max: 255,
    from: 125,
    skin: "modern",
       onChange: function (data) {
        $('#test').html(data);
            $('#RGB').css('color', 'rgb('+ $('#green').val() +','+$('#green').val()+','+$('#blue').val()+')');
            console.dir(data.from);
        }
});
$("#blue").ionRangeSlider({
    min: 0,
    max: 255,
    from: 125,
    skin: "big",
   onChange: function (data) {
    $('#test').html(data);
        $('#RGB').css('color', 'rgb('+ $('#blue').val() +','+$('#green').val()+','+$('#blue').val()+')');
        console.dir(data.from);
    }
});

$('#led1').change(function(){
  if ($(this).prop('checked')){
      led1Val = "ON";
  } else{
      led1Val = "OFF";
  }
  $.ajax({
    type:'GET',
    dataType:'JSON',
    url:'/led1',
    data:'status='+led1Val,
  });
});

$('#btnp10').click(function(){
  $.ajax({
    type:'GET',
    dataType:'JSON',
    url:'/p10',
    data:'text='+$('#p10text').val(),
  });
});



google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['r/min', 100],
    ['Km/h', 10],

  ]);

  var data2 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['F', 100],
    ['S', 10],

  ]);

  var options = {
    width: 400, height: 120,
    redFrom: 0, redTo: 30,
    yellowFrom:30, yellowTo: 60,
    greenFrom:60, greenTo: 100,
    minorTicks: 10
  };

  var options2 = {
    width: 400, height: 120,
    redFrom: 0, redTo: 30,
    yellowFrom:30, yellowTo: 60,
    greenFrom:60, greenTo: 100,
    minorTicks: 10
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

  var chart2 = new google.visualization.Gauge(document.getElementById('temperatur'));

  chart.draw(data, options);
  chart2.draw(data2, options2);

  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 1000);

}
