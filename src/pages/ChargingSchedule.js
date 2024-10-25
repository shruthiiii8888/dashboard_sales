// src/pages/ChargingSchedule.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const ChargingSchedule = ({ chargingSchedules }) => {
  return (
    <div>
      <h2>Charging Schedule</h2>
      <List>
        {chargingSchedules.length > 0 ? (
          chargingSchedules.map(schedule => (
            <ListItem key={schedule.vehicleId}>
              <ListItemText primary={`Vehicle ${schedule.vehicleId} - Scheduled Time: ${schedule.time}`} />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No charging schedules available." />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default ChargingSchedule;
