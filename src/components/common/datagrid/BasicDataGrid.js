import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function BasicDataGrid({sx,rows,columns,loading}) {
    const [pageSize,setPageSize] = React.useState(10)
    const handlePageSizeChange = (newPageSize) =>{
        setPageSize(newPageSize)
    }
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
                rowsPerPageOptions={[5,10,20,50]}
                disableSelectionOnClick
                sx={sx}
                loading={loading}
            />
        </Box>
    );
}