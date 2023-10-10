document.addEventListener('DOMContentLoaded', function() {
  
  // metrics
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

  // car table
  const cars = [
    { model: 'Model 1', color: 'Red', brand: 'Brand A', category: 'Sport', price: '$30,000' },
    { model: 'Model 2', color: 'Blue', brand: 'Brand B', category: 'Luxury', price: '$50,000' },
    { model: 'Model 3', color: 'Black', brand: 'Brand C', category: '4x4', price: '$40,000' }
    // Add more cars as needed
  ];

  const carTableBody = document.getElementById('carTableBody');

  cars.forEach(car => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td>${car.model}</td>
          <td>${car.color}</td>
          <td>${car.brand}</td>
          <td>${car.category}</td>
          <td>${car.price}</td>
      `;

      carTableBody.appendChild(row);
  });
});