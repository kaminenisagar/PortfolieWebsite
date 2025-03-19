import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/Home'
import Skills from './components/Home'
import Projects from './components/Home'
import Contacts from './components/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>          
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contacts}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
