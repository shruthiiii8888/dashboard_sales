import React, { useRef, useMemo } from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

// Dashboard component accepts 'vehicles' prop to get the vehicle data from VehicleList
const Dashboard = ({ vehicles = [], totalVehiclesColor = "#8884d8", lowBatteryColor = "#FF4C4C", chargingColor = "#82ca9d" }) => {
  const chartRef = useRef();

  // Compute statistics from the vehicles array
  const totalVehicles = vehicles.length;
  const activeVehicles = vehicles.filter(v => v.status === 'active').length;
  const lowBatteryVehicles = vehicles.filter(v => v.batteryPercentage < 15).length;
  const chargingVehicles = vehicles.filter(v => v.status === 'charging').length;

  // Prepare data for the bar chart
  const data = useMemo(() => [
    { name: 'Fleet Overview', totalVehicles, lowBattery: lowBatteryVehicles, charging: chargingVehicles },
  ], [totalVehicles, lowBatteryVehicles, chargingVehicles]);

  const handleDownload = () => {
    html2canvas(chartRef.current).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'fleet_management_chart.png');
      });
    });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Total Vehicles</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>{totalVehicles}</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>-</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Active Vehicles</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>{activeVehicles}</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>-</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Low Battery Vehicles</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>{lowBatteryVehicles}</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>-</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 1, textAlign: 'center' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Charging Vehicles</Typography>
            <Typography variant="h4" style={{ fontSize: '1.5rem' }}>{chargingVehicles}</Typography>
            <Typography variant="body2" style={{ fontSize: '0.75rem' }}>-</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={10} sx={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', width: '100%' }}>
            <Typography variant="h6" style={{ fontSize: '1rem' }}>Fleet Overview</Typography>
            <Button variant="contained" color="primary" size="small" onClick={handleDownload}>Download Report</Button>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }} ref={chartRef}>
              <BarChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalVehicles" fill={totalVehiclesColor} />
                <Bar dataKey="lowBattery" fill={lowBatteryColor} />
                <Bar dataKey="charging" fill={chargingColor} />
              </BarChart>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
