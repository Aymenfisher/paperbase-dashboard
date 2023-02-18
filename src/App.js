import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from "./components/header/Header";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { BasicDrawer } from "./components/navbar/BasicDrawer";






function App() {
  const isMobile = useMediaQuery('(max-width:890px');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setIsMenuOpen(!isMenuOpen);
};

  return (
    <div className="App">
      <Grid container height={'100%'} width={'100%'} wrap={'nowrap'}>
        <BasicDrawer toggleDrawer={toggleDrawer} variant={isMobile ? 'temporary' : 'persistent'} isMobile={isMobile} anchor='left' isOpen={isMenuOpen}/>
        <Grid item container direction={'column'} columnGap={2} xs>
          <Grid item ><Header toggleDrawer={toggleDrawer} isMobile={isMobile} /></Grid>
          <Grid item xs><Outlet/></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
