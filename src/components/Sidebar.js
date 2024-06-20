// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Home, People, ShoppingCart, BarChart, CalendarToday, Dashboard, Edit, Palette, PieChart, ShowChart, BarChart as BarChartIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Shoppy
        </Typography>
      </Toolbar>
      <List>
        {[
          { text: 'Dashboard', icon: <Dashboard />, link: '/' },
          { text: 'Ecommerce', icon: <Home />, link: '/ecommerce' },
          { text: 'Orders', icon: <ShoppingCart />, link: '/orders' },
          { text: 'Employees', icon: <People />, link: '/employees' },
          { text: 'Customers', icon: <People />, link: '/customers' },
          { text: 'Calendar', icon: <CalendarToday />, link: '/calendar' },
          { text: 'Kanban', icon: <BarChart />, link: '/kanban' },
          { text: 'Editor', icon: <Edit />, link: '/editor' },
          { text: 'Color-Picker', icon: <Palette />, link: '/color-picker' },
          { text: 'Bar Chart', icon: <BarChartIcon />, link: '/bar-chart' },
          { text: 'Line Chart', icon: <ShowChart />, link: '/line-chart' },
          { text: 'Pie Chart', icon: <PieChart />, link: '/pie-chart' },
        ].map((item, index) => (
          <ListItem button component={Link} to={item.link} key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
