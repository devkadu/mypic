import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/Signup/Signup';
import GlobalStyle from './styles/global';
import UploadProfilePic from './components/Upload/UploadProfilePic.js';
import UploadPicture from './components/Upload/UploadPicture';
import Logout from './pages/logout/logout';
import { About } from './pages/About/index'
import { Picture } from './pages/Picture/index';





function App() {
  return (
    <>
      <GlobalStyle />
    <div className="App">

      <Route exact path='/signup' render={(props) => <Signup {...props} />} />
      <Route exact path='/Login' render={(props) => <Login {...props} />} />
      <Route exact path='/' render={(props) => <Home {...props} />} />
      <Route exact path='/uploadProfilePic' render={(props) => <UploadProfilePic {...props} />} />
      <Route exact path='/uploadPicture' render={(props) => <UploadPicture {...props} />} />
      <Route exact path='/logout' render={(props) => <Logout {...props} />} />
      <Route exact path='/about' render ={(props) => <About {...props} />} />
      <Route exact path='/picture' render ={(props) => <Picture {...props} />} />
     
      
    </div>
    </>
  );
}

export default App;
