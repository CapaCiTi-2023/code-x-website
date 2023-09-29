
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
      text: "Rentals over time",
      fontSize: 40, // Adjust the title font size
      fontColor: '#ffffff', // Adjust the title font color
      fontStyle: 'bold' // Make the title bold
    },
    legend: {
      display: true,
      position: 'left', 
      align: 'center',
      // Adjust the legend position (top, bottom, left, right)
      labels: {
        fontColor: '#555' // Adjust the legend font color
      }
    },
    animation: {
      duration: 2000, // Adjust the animation duration in milliseconds
    },
    // Add other styling options as needed
  }
});

