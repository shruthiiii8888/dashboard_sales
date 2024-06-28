import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: 2,
        maxWidth: 600,
        margin: 'auto',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: 'royalblue' }}>
        Editor
      </Typography>
      <ReactQuill value={text} onChange={handleTextChange} />
      <Typography variant="body1" gutterBottom mt={2}>
        Content:
      </Typography>
      <Box
        p={2}
        mt={2}
        bgcolor="#f0f0f0"
        borderRadius={1}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Box>
  );
};

export default Editor;
