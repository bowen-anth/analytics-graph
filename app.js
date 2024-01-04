const xValues = ["Morbi ligula", "Scelerisque", "Praesent maecenas", "Morbi ligula", "Siekd eked"];
const yValues = [41, 29, 23, 4, 3];
const barColors = ["#B969C8", "#EA417C","#EE6B03","#FCD842","#68F0B0"];

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
    legend: {display: true},
    title: {
      display: true
    }
  }
});