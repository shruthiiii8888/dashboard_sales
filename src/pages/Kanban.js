import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const Kanban = () => (
  <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
    <Typography variant="h4" gutterBottom>
      Kanban Board
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            To Do
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Paper sx={{ p: 2, mb: 1 }}>Task 1</Paper>
            <Paper sx={{ p: 2, mb: 1 }}>Task 2</Paper>
            <Paper sx={{ p: 2, mb: 1 }}>Task 3</Paper>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            In Progress
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Paper sx={{ p: 2, mb: 1 }}>Task 4</Paper>
            <Paper sx={{ p: 2, mb: 1 }}>Task 5</Paper>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Done
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Paper sx={{ p: 2, mb: 1 }}>Task 6</Paper>
            <Paper sx={{ p: 2, mb: 1 }}>Task 7</Paper>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default Kanban;
