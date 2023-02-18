import { Badge, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import BasicMenu from '../Basicmenu/BasicMenu';

const NotificationBell = () => {
    const notifications = [
        {
            id: 0,
            label: 'First notification'
        },
        {
            id: 1,
            label: 'Second notification'
        },
    ]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        
        <Badge badgeContent={notifications.length} overlap={'circular'} color="error" >
            <Tooltip placement={'bottom'} title={notifications.length ? `Alerts • ${notifications.length} alerts` : 'Alerts • No Alerts'}>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                disabled={notifications.length ? false : true}>
                <NotificationsIcon color='white' />
            </IconButton>
            </Tooltip>
            <BasicMenu anchorEl={anchorEl} open={open} handleClose={handleClose} menuItems={notifications}/>
        </Badge>
        
    )
}

export default NotificationBell