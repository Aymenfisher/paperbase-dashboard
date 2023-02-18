import { Avatar, Box, IconButton, Link, Stack, Tooltip, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import React from 'react'
import CommonButton from '../common/commonButton/CommonButton';
import HelpIcon from '@mui/icons-material/Help';
import { headerStyles } from './styles'
import NotificationBell from '../common/notificationBell/NotificationBell';
import TabsComponent from '../common/tabs/TabsComponent';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ isMobile,toggleDrawer }) => {
    const { pathname } = useLocation()
    return (
        <Box sx={headerStyles.container}>
            <Grid container direction={'column'} justifyContent={'space-between'} sx={{ height: '100%' }}>
                <Grid item container justifyContent={'space-between'}>
                    <IconButton aria-label="delete" sx={{visibility:isMobile?'':'hidden'}} onClick={toggleDrawer}>
                        <MenuIcon color='white' />
                    </IconButton>
                    <Stack direction={'row'} alignItems={'center'} spacing={3}>
                        <Link underline='none' sx={{ '&:hover': { color: 'rgba(255,255,255,1)' } }} color={'rgba(255,255,255,.4)'} href="#">Go To docs</Link>
                        <NotificationBell />
                        <Avatar alt="avatar" src="https://mui.com/static/images/avatar/1.jpg" sx={{ '&:hover': { cursor: 'pointer' } }} />
                    </Stack>
                </Grid>
                <Grid item container justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item ><Typography variant='h1' color='white'>{pathname.slice(1)}</Typography></Grid>
                    <Grid item  >
                        <Grid container spacing={2} alignItems={'center'} justifyContent={'space-between'}>
                            <Grid item>
                                <CommonButton size={'small'} children={'Web setup'} variant={'outlined'} />
                            </Grid>
                            <Grid item>
                                <Tooltip title={'help'}>
                                    <IconButton aria-label="help" sx={{ paddingRight: 0 }}>
                                        <HelpIcon color={'white'} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item justifySelf={'flex-end'}><TabsComponent /></Grid>
            </Grid>
        </Box>

    )
}

export default Header