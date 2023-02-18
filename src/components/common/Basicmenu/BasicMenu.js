import { Menu, MenuItem } from '@mui/material';
import React from 'react';


const BasicMenu = ({ anchorEl, open, handleClose, menuItems }) => {
    return (
        <Menu 
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {menuItems.map((item) => {
                return <MenuItem key={item.id} onClick={handleClose}>{item.label}</MenuItem>
            })}
        </Menu>

    )
}

export default BasicMenu