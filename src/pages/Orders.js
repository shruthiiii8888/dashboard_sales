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

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Simulating an API call to fetch orders
    setTimeout(() => {
      const fetchedOrders = [
        { id: 1, name: 'Order 1', description: 'Description of Order 1', date: '2023-06-15' },
        { id: 2, name: 'Order 2', description: 'Description of Order 2', date: '2023-06-16' },
        { id: 3, name: 'Order 3', description: 'Description of Order 3', date: '2023-06-14' },
      ];
      setOrders(fetchedOrders);
      setLoading(false);
    }, 2000);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredOrders = orders.filter(order =>
    order.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Search Orders"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Sort By Date</InputLabel>
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          label="Sort By Date"
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {sortedOrders.map(order => (
            <ListItem key={order.id} alignItems="flex-start">
              <ListItemText
                primary={order.name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {order.description}
                    </Typography>
                    <br />
                    {`Date: ${order.date}`}
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

export default Orders;
