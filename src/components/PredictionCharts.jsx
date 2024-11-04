import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './components.css';

const PredictionCharts = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const updateChart = (chartInstance, data) => {
    if (chartInstance) {
      chartInstance.data.datasets = data.map((item, index) => ({
        label: item.itemName,
        data: item.predictions.map(prediction => prediction.quantity),
        borderColor: getColor(index),
        backgroundColor: getColor(index),
        fill: false,
        pointBackgroundColor: getColor(index),
        pointRadius: 5,
        pointHoverRadius: 8,
      }));
      chartInstance.update();
    }
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Period 1', 'Period 2', 'Period 3'],
        datasets: [],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Predictions for Different Items Over Periods',
            font: {
              size: 18,
              weight: 'bold',
            },
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Periods',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Quantity',
            },
            beginAtZero: true,
          },
        },
        onHover: (event, chartElement) => {
          event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        },
        onClick: (event, chartElement) => {
          if (chartElement[0]) {
            const datasetIndex = chartElement[0].datasetIndex;
            const dataItem = data[datasetIndex];
            console.log('Clicked:', dataItem.itemName);
          }
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    updateChart(chartInstance.current, data);
  }, [data]);

  const getColor = index => {
    const colors = [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)',
    ];
    return colors[index % colors.length];
  };

  return <canvas ref={chartRef} id="predictionChart" />;
};

export default PredictionCharts;
