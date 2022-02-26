import { collection } from 'firebase/firestore'
import React, { useState ,useEffect } from 'react'
import { db , onSnapshot, doc, getDocs } from '../../firebase'
import FileItem from './FileItem'
import '../../styles/FilesView.css'
import FileCard from './FileCard'

function FilesView() {
  const [files, setFiles] = useState([])

  useEffect(() => {
  getDocs(collection(db, "myFiles")).then(querySnapshot => {
    setFiles(querySnapshot.docs.map(doc => ({
      key: doc.id,
      id: doc.id,
      item: doc.data()

      })))
  });
  }, [])


  return (
    <div className='fileView'>
        <div className="fileView__row">
          {
            files.slice(0,5).map(({id, item}) =>(
              <FileCard key={id} name={item.caption}/>
            ))
          }
        </div>

        <div className="fileView__titles">
            <div className="fileView_titles--left">
                <p>Name</p>
            </div>

            <div className="fileView__titles--right">
                <p>Last modified</p>
                <p>Files size</p>
            </div>
        </div>
        {
          files.map(({id, item})=>(
           <FileItem key={id} id={id} caption={item.caption} timestamp={item.timestamp}
            fileUrl={item.fileUrl} size={item.size}/>
          ))
        }
    </div>
  )
}

export default FilesView