import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';import React from 'react'
import '../../styles/FileCard.css'

function FileCard({name}) {
  return (
    <div className="fileCard">
        <div className="fileCard--top">
            <InsertDriveFileIcon style={{fontSize: 130}} />
        </div>

        <div className="fileCard--bottom">
            <p>{name}</p>
        </div>
    </div>
  )
}

export default FileCard