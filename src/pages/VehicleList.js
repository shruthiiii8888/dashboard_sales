// src/pages/VehicleList.js
import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';

const VehicleList = ({ vehicles, addVehicle, updateVehicle, removeVehicle }) => {
  const [newVehicle, setNewVehicle] = useState({ id: '', battery: 100, status: 'Idle' });

  const handleAddVehicle = () => {
    if (newVehicle.id) {
      addVehicle(newVehicle);
      setNewVehicle({ id: '', battery: 100, status: 'Idle' });
    }
  };

  return (
    <div>
      <h2>Vehicle Management</h2>
      <TextField
        label="Vehicle ID"
        value={newVehicle.id}
        onChange={(e) => setNewVehicle({ ...newVehicle, id: e.target.value })}
      />
      <Button onClick={handleAddVehicle} variant="contained" color="primary">
        Add Vehicle
      </Button>
      <List>
        {vehicles.map(vehicle => (
          <ListItem key={vehicle.id}>
            <ListItemText primary={`Vehicle ${vehicle.id} - Battery: ${vehicle.battery}% - Status: ${vehicle.status}`} />
            <Button onClick={() => updateVehicle({ ...vehicle, status: 'Charging' })} variant="outlined">Charge</Button>
            <Button onClick={() => removeVehicle(vehicle.id)} variant="outlined" color="secondary">Remove</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default VehicleList;
