import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List'; import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarItems } from './consts/navbarItems';
import { useLocation, useNavigate } from 'react-router-dom';
import { navbarStyles } from './styles';



export const BasicDrawer = ({variant, anchor,isMobile,toggleDrawer,isOpen}) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    

    return (
        <Drawer
            sx={navbarStyles.drawer}
            variant={variant}
            anchor={anchor}
            open={isMobile ? isOpen: true}
            onClose={toggleDrawer}
        >
            <Toolbar />
            <Divider />
            <List sx={navbarStyles.list} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                {navbarItems.map((item) => (
                    <ListItem key={item.id} disablePadding onClick={() => { navigate(item.route) }}>
                        <ListItemButton selected={item.route === pathname}>
                            <ListItemIcon sx={navbarStyles.icons} >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={navbarStyles.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    )
}