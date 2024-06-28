// src/pages/Employees.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

// Import images
import johnDoeImage from './image.png';
import janeSmithImage from './image2.png';
import mikeJohnsonImage from './image3.jpeg';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Simulating an API call to fetch employees
    setTimeout(() => {
      const fetchedEmployees = [
        {
          id: 1,
          name: 'John Doe',
          position: 'Software Engineer',
          email: 'john.doe@example.com',
          phone: '555-555-5555',
          profilePicture: johnDoeImage,
        },
        {
          id: 2,
          name: 'Jane Smith',
          position: 'Product Manager',
          email: 'jane.smith@example.com',
          phone: '555-555-5556',
          profilePicture: janeSmithImage,
        },
        {
          id: 3,
          name: 'Mike Johnson',
          position: 'UX Designer',
          email: 'mike.johnson@example.com',
          phone: '555-555-5557',
          profilePicture: mikeJohnsonImage,
        },
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
              <ListItemAvatar>
                <Avatar src={employee.profilePicture} />
              </ListItemAvatar>
              <ListItemText
                primary={employee.name}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      {employee.position}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="text.secondary">
                      {employee.email}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2" color="text.secondary">
                      {employee.phone}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Employees;
