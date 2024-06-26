const sampleData = {
  labels: ['Wash', 'sweeping', 'cleaning', 'lifting', 'buying', 'cooking', 'watching tv', 'playing', 'jogging', 'walking', 'sprint', 'sleeping'],
  datasets: [{
    label: 'Annual Sales',
    data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 1
  }]
};

const ctx = document.getElementById('My Daily life ').getContext('2d');
let currentChart;

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }
  
  currentChart = new Chart(ctx, {
    type: type,
    data: sampleData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function changeChartType(type) {
  renderChart(type);
}

renderChart('bar');