var ctxBar = $("#bar-chart");
var ctxDonut = $("#donut-chart");


var values = $('.table-row .data-product .number').map(function(){
  return $(this).text();
});

// var labels = $('.table-row .row-title').map(function(){
//   return $(this).text();
// });

// console.log(values);
// console.log(labels);

var barChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ["Amazon", "Redbubble", "Etsy"],
    datasets: [{
      label: '# of Products',
      data: values,
      backgroundColor: [
        'rgba(255, 99, 132, .2)',
        'rgba(54, 162, 235, .2)',
        'rgba(255, 206, 86, .2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        // display: false,
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        // display: false
      }]
    }
  }
});





var donutChart = new Chart(ctxDonut, {
  type: 'doughnut',
  data: {
    labels: [
      "Amazon",
      // "Redbubble",
      "Etsy"
    ],
    datasets: [{
      data: [78, 22],
      backgroundColor: [
       'rgba(255, 99, 132, .2)',
        'rgba(255, 206, 86, .2)'
      ],
      hoverBackgroundColor: [
        "#FF6384",
        // "#36A2EB",
        "#FFCE56"
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  }
});
