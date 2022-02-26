import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../../styles/SidebarItem.css';

function Sidebaritem({arrow, icon, label}) {
  return (
    <div className="sidebarItem">
        <div className="sidebarItem__arrow">
            {arrow && (<ArrowRightIcon/>)}
        </div>

        <div className="sidebarItem__main">
            {icon}
            <p>{label}</p>
        </div>
    </div>
  )
}

export default Sidebaritem