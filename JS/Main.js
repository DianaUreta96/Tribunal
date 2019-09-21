// ctrl shift i para abrir consola en el navegador
// console.log("me ejecuto");
// var Name = $("#nombre").val();
// console.log(Name);

// Para comunicarnos desde la vista al JS
function consultar() {
    // console.log("Me ejecuto");
    var FECHA = "201902";
    var NAME = "1";
    var _DEP = $("#DeP").val();
    var _MUN = "0";  

    // console.log(`tipo ${TipoEleccion}  presidente ${Name}  Depa ${Depa}  Muni ${Muni}`);

    axios.post('https://ws2v.tse.org.gt/api/tse/resultados', {
            PROCESO: FECHA,
            TIPOELECCION: NAME,
            DEP: _DEP,
            MUN: _MUN
      })
      .then(function (response) {
        console.log(response.data.data['0']);
        var Vamos = response.data.data['0'].V1;
        var Une = response.data.data['0'].V2;
        // console.log(Une);


        // https://www.chartjs.org/docs/latest/
        var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Vamos', 'Une'],
        datasets: [{
            label: 'Votaciones Presidenciales 2019',
            data: [Vamos, Une],
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(49, 199, 74, 1)',
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});







      })
      .catch(function (error) {
        console.log(error);
      });


      

}

