import React, { useRef } from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = ({ pvColor = "#8884d8", uvColor = "#82ca9d" }) => {
  const chartRef = useRef();

  const handleDownload = () => {
    html2canvas(chartRef.current).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'chart.png');
      });
    });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Earnings</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>$63,448.78</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>+4%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Customers</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>39,354</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>-4%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Products</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>4,396</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>+23%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Sales</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>423,39</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>+38%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={10} sx={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', width: '100%' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Revenue Updates</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>$93,438</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>Budget</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>$48,438</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>Expense</Typography>
            <Button variant="contained" color="primary" size="small" onClick={handleDownload}>Download Report</Button>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }} ref={chartRef}>
              <BarChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill={pvColor} />
                <Bar dataKey="uv" fill={uvColor} />
              </BarChart>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
