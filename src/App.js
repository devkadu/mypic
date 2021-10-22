import { Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import GlobalStyle from './styles/global';




function App() {
  return (
    <>
      <GlobalStyle />
    <div className="App">

      <Route exact path='/signup' render={(props) => <Signup {...props} />} />
    </div>
    </>
  );
}

export default App;
