import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, ThemeProvider, createTheme, Switch as ThemeSwitch, FormControlLabel } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import BarChartPage from './pages/BarChartPage';
import LineChartPage from './pages/LineChartPage';
import PieChartPage from './pages/PieChartPage';
import Orders from './pages/Orders';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Editor from './pages/Editor';
import ColorPicker from './pages/ColorPicker';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
              <Route path="/" element={<Dashboard />} />
              <Route path="/ecommerce" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
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
