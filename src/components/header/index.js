import React from 'react'
import '../../styles/Header.css'

import ggDriveLogo from '../../media/gg-drive-icon.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

function index({userPhoto}) {
  return (
    <div>
        <div className="header">
            <div className="header__logo">
                <img src={ggDriveLogo} alt=""/>
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type='text' placeholder='Seach in Drivvvve'></input>
                    <ExpandMoreIcon />
                </div>
                
            
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>
                <AppsIcon />
                <img src={userPhoto} alt='User Photo'/>
            </div>
        </div>
    </div>
  )
}

export default index