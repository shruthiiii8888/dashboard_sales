// src/pages/Customers.js
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
import aliceBrownImage from './image4.png';
import bobWhiteImage from './image5.jpeg';
import charlieBlackImage from './image6.png';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Simulating an API call to fetch customers
    setTimeout(() => {
      const fetchedCustomers = [
        {
          id: 1,
          name: 'Alice Brown',
          email: 'alice.brown@example.com',
          profilePicture: aliceBrownImage,
        },
        {
          id: 2,
          name: 'Bob White',
          email: 'bob.white@example.com',
          profilePicture: bobWhiteImage,
        },
        {
          id: 3,
          name: 'Charlie Black',
          email: 'charlie.black@example.com',
          profilePicture: charlieBlackImage,
        },
      ];
      setCustomers(fetchedCustomers);
      setLoading(false);
    }, 2000);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCustomers = filteredCustomers.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Customers
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the Customers page.
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Search Customers"
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
          {sortedCustomers.map(customer => (
            <ListItem key={customer.id}>
              <ListItemAvatar>
                <Avatar src={customer.profilePicture} />
              </ListItemAvatar>
              <ListItemText
                primary={customer.name}
                secondary={customer.email}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Customers;
