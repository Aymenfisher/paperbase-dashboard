import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export const navbarItems = [
    {
        id:0,
        title:'Authentication',
        icon:<PeopleIcon/>,
        route:'/authentication'
    },
    {
        id:1,
        title:'Database',
        icon:<StorageIcon/>,
        route:'/database'
    },
    {
        id:2,
        title:'Storage',
        icon:<ImageIcon/>,
        route:'/storage'
    },
    {
        id:3,
        title:'Hosting',
        icon:<PublicIcon/>,
        route:'/hosting'
    },
    {
        id:4,
        title:'Functions',
        icon:<SettingsEthernetIcon/>,
        route:'/functions'
    },
    {
        id:5,
        title:'Machine Learning',
        icon:<SettingsInputComponentIcon/>,
        route:'/machine-learning'
    }
]