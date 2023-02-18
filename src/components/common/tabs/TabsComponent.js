import { Tab, Tabs } from '@mui/material'
import React from 'react'

const TabsComponent = () => {
    const tabItems = [
        {
            id:1,
            label:'Users'
        },
        {
            id:2,
            label:'Sign-in method'
        },
        {
            id:3,
            label:'Templates'
        },
        {
            id:4,
            label:'Usage'
        }
    ]
    const [value, setValue] = React.useState(tabItems[0].label);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Tabs
            value={value}
            variant='scrollable'
            onChange={handleChange}
            aria-label="tabs"
            TabIndicatorProps={{style:{backgroundColor:'white',height:'4px',borderRadius:'4px 4px 0 0'}}}
        >
            {
                tabItems.map((item) =>{
                    return <Tab sx={{color:'white !important'}} key={item.id} value={item.label} label={item.label} />
                })
            }
        </Tabs>
    )
}

export default TabsComponent