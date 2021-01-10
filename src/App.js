import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Vote from './components/Vote';
import Visitors from './components/Visitors';
import Results from './components/Results';
import CreateQuestion from './components/CreateQuestion';

function App() {

  return (
    <div className="App">
        <Router>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/visitors" render={() => <Visitors/>}/>
            <Route exact path="/vote" render={() => <Vote/>}/>
            <Route exact path="/results" render={() => <Results/>}/>
            <Route exact path="/create-question" render={() => <CreateQuestion/>}/>
        </Router>
    </div>
  );
}

export default App;
