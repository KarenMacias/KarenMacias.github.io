function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Minutos', 'Mujeres', 'Hombres', 'Otros'],
        ['25', 100, 40, 20],
        ['50', 17, 46, 25],
        ['75', 66, 112, 30],
        ['100', 10, 54, 35]
    ]);

    var options = {
        chart: {
        title: 'Minutos jugados totales',
        subtitle: 'Usuarios y el tiempo que han jugado "TheBuilding"',
        },
        hAxis: {
        title: 'Número de usuarios',
        minValue: 0
        },
        vAxis: {
        title: 'Minutos'
        },
        bars: 'horizontal' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}



function drawChartOne() {
    var data = google.visualization.arrayToDataTable([
        ['Minutos', 'Mujeres', 'Hombres', 'Otros'],
        ['25', 23, 44, 27],
        ['50', 117, 34, 20],
        ['75', 36, 120, 50],
        ['100', 30, 50, 25]
    ]);
    
    var options = {
        chart: {
        title: 'Duración de sesión',
        subtitle: 'Usuarios y el tiempo de sesión en "TheBuilding"',
        },
        hAxis: {
          title: 'Número de usuarios',
          minValue: 0
        },
        vAxis: {
          title: 'Minutos'
        },
        bars: 'horizontal' // Required for Material Bar Charts.
    };
    
    var chartOne = new google.charts.Bar(document.getElementById('barchart_material_One'));
    
    chartOne.draw(data, google.charts.Bar.convertOptions(options));
}



function drawChartTwo() {
    var data = google.visualization.arrayToDataTable([
      ['Cantidad', 'Éxitos', 'Fallos'],
      ['Nivel 1', 100, 10],
      ['Nivel 2', 65, 25],
      ['Nivel 3', 79, 12],
    ]);

    var options = {
      chart: {
        title: 'Éxitos y fallos por nivel',
        subtitle: 'Usarios por nivel jugando "TheBuilding"',
      },
      hAxis: {
        title: 'Número de usuarios',
        minValue: 0
      },
      vAxis: {
        title: 'Minutos'
      }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}



function drawChartThree() {
    var data = google.visualization.arrayToDataTable([
      ['Minutos', 'Mujeres', 'Hombres', 'Otros'],
      ['Nivel 3', 200, 100, 180],
    ]);

    var options = {
      chart: {
        title: 'Tiempo máximo para completar "TheBuilding"',
      },
      hAxis: {
        title: 'Juego Completo',
        minValue: 0
      },
      vAxis: {
        title: 'Minutos'
      }
    };

    var chart1 = new google.charts.Bar(document.getElementById('columnchart_material_One'));

    chart1.draw(data, google.charts.Bar.convertOptions(options));
}




function drawChartFour() {
    var data = google.visualization.arrayToDataTable([
      ['Minutos', 'Mujeres', 'Hombres', 'Otros'],
      ['Nivel 3', 60, 80, 90],
    ]);

    var options = {
      chart: {
        title: 'Tiempo mínimo para completar "TheBuilding"',
      },
      hAxis: {
        title: 'Juego Completo',
        minValue: 0
      },
      vAxis: {
        title: 'Minutos'
      }
    };

    var chart2 = new google.charts.Bar(document.getElementById('columnchart_material_Two'));

    chart2.draw(data, google.charts.Bar.convertOptions(options));
}




function drawChartFive() {
    var data = google.visualization.arrayToDataTable([
      ['Minutos', 'Mínimo', 'Máximo'],
      ['Sala 1', 2, 5],
      ['Sala 2', 2, 6],
      ['Sala 3', 3, 6],
      ['Sala 4', 4, 6],
      ['Sala 5', 4, 5],
      ['Sala 6', 3, 5],
      ['Sala 7', 3, 7],
      ['Sala 8', 5, 6],
      ['Sala 9', 5, 6],
    ]);

    var options = {
      chart: {
        title: 'Tiempo mínimo y máximo por sala en "TheBuilding"',
      },
      hAxis: {
        title: 'Tiempo por sala',
        minValue: 0
      },
      vAxis: {
        title: 'Minutos'
      }
    };

    var chart3 = new google.charts.Bar(document.getElementById('columnchart_material_Three'));

    chart3.draw(data, google.charts.Bar.convertOptions(options));
}



function drawChartSix() {
    var data = google.visualization.arrayToDataTable([
      ['Minutos', 'Mujeres', 'Hombres', 'Otros'],
      ['Nivel 3', 5, 8, 15],
    ]);

    var options = {
      chart: {
        title: 'Tiempo mínimo para completar "TheBuilding"',
      },
      hAxis: {
        title: 'Juego Completo',
        minValue: 0
      },
      vAxis: {
        title: 'Cantidad'
      }
    };

    var chart4 = new google.charts.Bar(document.getElementById('columnchart_material_Four'));

    chart4.draw(data, google.charts.Bar.convertOptions(options));
}



function drawChartSeven() {
    var data = google.visualization.arrayToDataTable([
      ['Minutos', 'Mujeres', 'Hombres', 'Otros'],
      ['Nivel 3', 15, 8, 5],
    ]);

    var options = {
      chart: {
        title: 'Partidas perdidas por ahogo en "TheBuilding"',
      },
      hAxis: {
        title: 'Juego Completo',
        minValue: 0
      },
      vAxis: {
        title: 'Cantidad'
      }
    };

    var chart5 = new google.charts.Bar(document.getElementById('columnchart_material_Five'));

    chart5.draw(data, google.charts.Bar.convertOptions(options));
}



function drawChartEight() {
    var data = google.visualization.arrayToDataTable([
      ['Cantidad', 'Mínimos', 'Máximos'],
      ['Nivel 1', 0, 4],
      ['Nivel 2', 2, 5],
      ['Nivel 3', 1, 3],
    ]);

    var options = {
      chart: {
        title: 'Cantidad de items utilizados por nivel',
        subtitle: 'Items por nivel jugando "TheBuilding"',
      },
      hAxis: {
        title: 'Número de items',
        minValue: 0
      },
      vAxis: {
        title: 'Cantidad'
      }
    };

    var chart6 = new google.charts.Bar(document.getElementById('columnchart_material_Six'));

    chart6.draw(data, google.charts.Bar.convertOptions(options));
}




function drawChartNine() {
    var data = google.visualization.arrayToDataTable([
      ['Minutos', 'Mínimo', 'Máximo'],
      ['Sala 1', 0, 4],
      ['Sala 2', 0, 1],
      ['Sala 3', 0, 5],
      ['Sala 4', 1, 3],
      ['Sala 5', 1, 4],
      ['Sala 6', 2, 3],
      ['Sala 7', 0, 3],
      ['Sala 8', 1, 4],
      ['Sala 9', 2, 3],
    ]);

    var options = {
      chart: {
        title: 'Items de oportunidad por sala en "TheBuilding"',
      },
      hAxis: {
        title: 'Número de items',
        minValue: 0
      },
      vAxis: {
        title: 'Cantidad'
      }
    };

    var chart7 = new google.charts.Bar(document.getElementById('columnchart_material_Seven'));

    chart7.draw(data, google.charts.Bar.convertOptions(options));
}



function drawChartTen() {
    var data = google.visualization.arrayToDataTable([
      ['Minutos', 'Mujeres', 'Hombres', 'Otros'],
      ['Nivel 3', 5, 8, 9],
    ]);

    var options = {
      chart: {
        title: 'Items de tips utilizados en "TheBuilding"',
      },
      hAxis: {
        title: 'Juego Completo',
        minValue: 0
      },
      vAxis: {
        title: 'Cantidad'
      }
    };

    var chart8 = new google.charts.Bar(document.getElementById('columnchart_material_Eight'));

    chart8.draw(data, google.charts.Bar.convertOptions(options));
}