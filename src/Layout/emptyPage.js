import React from 'react'
import { Box,Typography } from '@mui/material';
import { Button, CreateButton } from 'react-admin';

export const Empty = ({description}) => (
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            No products available
        </Typography>
    </Box>
);
