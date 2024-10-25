import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, ThemeProvider, createTheme, Switch as ThemeSwitch, FormControlLabel } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/VehicleList';
import Customers from './pages/ChargingSchedule';
import BarChartPage from './pages/BarChartPage';
import LineChartPage from './pages/LineChartPage';
import PieChartPage from './pages/PieChartPage';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Editor from './pages/Editor';
import ColorPicker from './pages/ColorPicker';
import VehicleList from './pages/VehicleList';
import ChargingSchedule from './pages/ChargingSchedule';

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [chargingSchedules, setChargingSchedules] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addVehicle = (vehicle) => {
    setVehicles((prev) => [...prev, vehicle]);

    // Example of adding a default charging schedule
    const newSchedule = { vehicleId: vehicle.id, time: '10:00 AM' }; // Example time
    setChargingSchedules((prev) => [...prev, newSchedule]);
  };

  const updateVehicle = (updatedVehicle) => {
    setVehicles((prev) =>
      prev.map((v) => (v.id === updatedVehicle.id ? updatedVehicle : v))
    );

    // Update the charging schedule based on vehicle updates if necessary
  };

  const removeVehicle = (id) => {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
    setChargingSchedules((prev) => prev.filter((schedule) => schedule.vehicleId !== id)); // Remove related schedule
  };

  const handleThemeChange = (event) => {
    setIsDarkMode(event.target.checked);
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
      },
    }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <FormControlLabel
              control={<ThemeSwitch checked={isDarkMode} onChange={handleThemeChange} />}
              label="Dark Mode"
              sx={{ mb: 2 }}
            />
            <Routes>
            <Route 
    path="/" 
    element={<Dashboard vehicles={vehicles} />} 
  />
  <Route 
    path="/vehicle-list" 
    element={<VehicleList vehicles={vehicles} addVehicle={addVehicle} updateVehicle={updateVehicle} removeVehicle={removeVehicle} />} 
  />
              <Route 
    path="/charging-schedule" 
    element={<ChargingSchedule chargingSchedules={chargingSchedules} />} 
  />
              <Route path="/ecommerce" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              <Route path="/bar-chart" element={<BarChartPage />} />
              <Route path="/line-chart" element={<LineChartPage />} />
              <Route path="/pie-chart" element={<PieChartPage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
