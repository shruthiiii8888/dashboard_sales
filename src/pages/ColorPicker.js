import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { SketchPicker } from 'react-color';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My Dataset',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: color,
        backgroundColor: `${color}80`, // Semi-transparent background color
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: 2,
        maxWidth: 600,
        margin: 'auto',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Color Picker
      </Typography>
      <SketchPicker color={color} onChangeComplete={handleColorChange} />
      <Typography variant="body1" gutterBottom>
        Selected Color: {color}
      </Typography>
      <Box
        mt={2}
        width={100}
        height={100}
        bgcolor={color}
        border="1px solid #000"
        borderRadius={1}
      />
      <Box mt={4}>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default ColorPicker;
