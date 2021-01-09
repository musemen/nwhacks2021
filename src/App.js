import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateQuestion from './components/CreateQuestion';
import Results from './components/Results';
import Vote from './components/Vote';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/vote">
                <Vote />
            </Route>
            <Route path="/results">
                <Results />
            </Route>
            <Route path="/create-question">
                <CreateQuestion />
            </Route>
        </Router>
    );
}

export default App;
