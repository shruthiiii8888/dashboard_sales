// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import BarChartPage from './pages/BarChartPage';
import LineChartPage from './pages/LineChartPage';
import PieChartPage from './pages/PieChartPage';

// Import the missing components
import Orders from './pages/Orders';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Editor from './pages/Editor';
import ColorPicker from './pages/ColorPicker';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
  );
};

export default App;
