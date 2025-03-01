/* eslint-disable react/prop-types */
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InterpolationChart = ({ diagnosis_history }) => {
  const [labels, setLabels] = useState([]);
  const [bpData, setBpData] = useState([]);
  const [dpData, setDpData] = useState([]);

  // Update state based on diagnosis_history whenever it changes
  useEffect(() => {
    if (diagnosis_history && diagnosis_history.length > 0) {
      const updatedLabels = diagnosis_history.map((item) => item.month);
      const updatedBpData = diagnosis_history.map((item) => item.blood_pressure.systolic.value);
      const updatedDpData = diagnosis_history.map((item) => item.blood_pressure.diastolic.value);

      setLabels(updatedLabels);
      setBpData(updatedBpData);
      setDpData(updatedDpData);
    }
  }, [diagnosis_history]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Systolic Blood Pressure',
        data: bpData,
        borderColor: '#C26EB4',
        backgroundColor: '#C26EB4',
        tension: 0.4, // Smooth line interpolation
      },
      {
        label: 'Diastolic Blood Pressure',
        data: dpData,
        borderColor: '#7E6CAB',
        backgroundColor: '#7E6CAB',
        tension: 0.4, // Smooth line interpolation
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default InterpolationChart;
