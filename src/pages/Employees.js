// src/pages/Employees.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Simulating an API call to fetch employees
    setTimeout(() => {
      const fetchedEmployees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', position: 'Product Manager' },
        { id: 3, name: 'Mike Johnson', position: 'UX Designer' },
      ];
      setEmployees(fetchedEmployees);
      setLoading(false);
    }, 2000);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Employees
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the Employees page.
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Search Employees"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Sort By Name</InputLabel>
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          label="Sort By Name"
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {sortedEmployees.map(employee => (
            <ListItem key={employee.id}>
              <ListItemText
                primary={employee.name}
                secondary={employee.position}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Employees;
