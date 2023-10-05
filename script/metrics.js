
var xValues = ["Luxary Cars", "Sport Cars", "Four-wheel Drive"];
var yValues = [100, 49, 33];
var barColors = [
  "#AB0552",
  "#B175FF",
  "#ffffff",
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      // text: "Rentals over time",
      fontSize: 40,
      fontColor: '#ffffff',
      fontStyle: 'bold'
    },
    legend: {
      display: true,
      position: 'left', 
      align: 'center',
      labels: {
        fontColor: '#555'
      }
    },
    animation: {
      duration: 2000,
    },
  }
});

