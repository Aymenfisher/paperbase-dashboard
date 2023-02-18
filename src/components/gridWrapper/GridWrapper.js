import { Grid } from '@mui/material'
import React from 'react'

const GridWrapper = ({children}) => {
    return (
        <Grid container justifyContent={'center'} height={'100%'} sx={{ p: 3, boxSizing: 'border-box', bgcolor: '#eaeff1',overflow:'auto' }}>
            {children}
        </Grid>
    )
}

export default GridWrapper