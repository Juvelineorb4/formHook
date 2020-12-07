//import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import CreateForm from './components/CreateForm';
function App() {
  return (
    <Router>
       <Navigation/>
       <div className="container pt-4">
          <Route path ='/' exact component = {CreateForm} />
        
      </div>

    </Router>
  );
}

export default App;
