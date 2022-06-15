import './App.css';
import Singin from './components/signin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Registration from './components/registration';
import Homepage from './components/homepage';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Singin}>
      <Singin />
      </Route>
      <Route path="/registration" component={Registration}>
      <Singin />
      </Route>
      <Route path="" component={Homepage}>
      
      </Route>
      
    </Switch>
    
    </Router>
      
      
     

  );
}

export default App;
