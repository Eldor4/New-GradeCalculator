import{BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main'
import Grade from './components/Grade'

function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/"  exact component={Main}/>
    <Route path="/grade" component={Grade}/>
    </div>
    </Router>

  );
}

export default App;
