// src/components/Topbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu, Brightness4, Brightness7 } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store';

const Topbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">Admin Dashboard</Typography>
        <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
