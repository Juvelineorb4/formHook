import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateForm from './components/CreateForm';
import FormList from './components/FromList';
import ProductsList from './components/ProductsList';
import './App.css';



function App() {
  return (
    <Router>
       <Navigation/>
       
       <div className="container pt-4">
          <Route exact path ='/'   component = {CreateForm} />
          <Route exact path ='/formList'   component = {FormList} />
          <Route exact path ='/ProductsList'   component = {ProductsList} />
        
      </div>

    </Router>
  );
}

export default App;
