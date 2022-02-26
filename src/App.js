import './App.css';
import Header from './components/header'
import {useState} from 'react'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcon from './components/sideIcons'
import ggDriveLogo from './media/gg-drive-icon.png'
import {auth, provider} from './firebase'

//2:24:00 before Login https://www.youtube.com/watch?v=ljuCH6_jrYE&t=5940s
function App() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    if(!user){
      auth.signInWithPopup(provider).then((result) =>{
        setUser(result.user)
      })
    }
  }

  return (
    <div className="App">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL}/>
            
            <div className="app__main">
              <Sidebar/>
              <FilesView />
              <SideIcon />
            </div>
     
          
          </>
        ) : (
          <div className="app__login">
            <img src={ggDriveLogo} alt='Google Drive' />
            <button onClick={handleLogin}>Login to Google Drive</button>
          </div>
        )
      }

     

         {/*no auth: log in */}

    </div>
  );
}

export default App;
