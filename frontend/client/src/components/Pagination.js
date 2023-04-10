import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../styles/Pagination.css';

export default function BasicPagination() {
    return (
        <div className='pagination'>
            <div spacing={2}>
                <Pagination count={10} color="secondary" />
            </div>
        </div>
    );
}