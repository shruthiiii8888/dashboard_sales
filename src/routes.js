// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Tables from './pages/Tables';
import Charts from './pages/Editor';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/charts" element={<Charts />} />
    </Routes>
  </Router>
);

export default AppRoutes;
