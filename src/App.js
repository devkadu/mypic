import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/Signup/Signup';
import GlobalStyle from './styles/global';





function App() {
  return (
    <>
      <GlobalStyle />
    <div className="App">

      <Route exact path='/signup' render={(props) => <Signup {...props} />} />
      <Route exact path='/Login' render={(props) => <Login {...props} />} />
      <Route exact path='/' render={(props) => <Home {...props} />} />
     
      
    </div>
    </>
  );
}

export default App;
