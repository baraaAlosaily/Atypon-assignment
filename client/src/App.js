import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import Details from './components/details/Details';
import Navbar from './components/navBar/Navbar';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="gradient__bg">
                <Navbar/>
      </div>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/recipe/:id" component={Details}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
