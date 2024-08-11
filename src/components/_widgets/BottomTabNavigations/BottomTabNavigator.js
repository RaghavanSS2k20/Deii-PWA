import VoiceMode from "../../VoiceMode/VoiceMode";
import TextMode from "../../TextMode/TextMode";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';

const [value,setValue] = React.useState(0)
const BottomTabNavigator = ()=>{
    return(
        <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Voice" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Text" icon={<FavoriteIcon />} />
          
        </BottomNavigation>
      </Box>
    )
}
export default BottomTabNavigator;
    
