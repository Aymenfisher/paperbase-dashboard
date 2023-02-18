export const navbarStyles = {
    drawer: {
        width: 256,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 256,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
    list: {
        // selected and (selected + hover) states
        '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: 'rgba(0, 155, 229, 0.08)',
            '&, & .MuiListItemIcon-root': {
                color: '#4fc3f7!important',
            },
        },
        // hover states
        '& .MuiListItemButton-root:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
        },
    icons: {
        color: 'rgba(255, 255, 255, 0.7)',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};