import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Snakbar = () => {


    return (
        <div>
            <Snackbar
                message="I love snacks"
                autoHideDuration={5000}
            />
        </div>
    )
}

export default Snakbar