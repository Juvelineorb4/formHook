import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import CreateForm from './components/CreateForm';
import FormList from './components/FromList';



function App() {
  return (
    <Router>
       <Navigation/>
       
       <div className="container pt-4">
          <Route path ='/' exact  component = {CreateForm} />
          <Route path ='/formList' exact  component = {FormList} />
        
      </div>

    </Router>
  );
}

export default App;
