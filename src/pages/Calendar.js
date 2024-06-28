import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar
import { Box, Typography } from '@mui/material';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'royalblue' }}>
        My Calendar
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Calendar
          onChange={onChange}
          value={date}
          tileClassName={({ date, view }) => {
            // Add custom classes for specific dates
            if (date.getDay() === 0 || date.getDay() === 6) {
              return 'weekend';
            }
          }}
        />
      </Box>
      <style jsx global>{`
        .react-calendar {
          border: none;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .react-calendar__tile {
          max-width: initial !important;
        }
        .react-calendar__tile--now {
          background: #ffeb3b;
          color: black;
        }
        .react-calendar__tile--active {
          background: #3f51b5;
          color: white;
        }
        .react-calendar__tile--weekend {
          background: #f0f0f0;
        }
      `}</style>
    </Box>
  );
};

export default MyCalendar;
