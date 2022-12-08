import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { orange, grey } from '@mui/material/colors';


export const PrimaryButton = styled(Button)(({ theme }) => ({
    color: '#f2f2f2',
    backgroundColor: "#56446f",
    '&:hover': {
        backgroundColor: "#322740",
    },
}));


export const CancelButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
        backgroundColor: orange[700],
    },
}));


