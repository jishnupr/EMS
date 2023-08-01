import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Admin from './Components/Admin';
import Add from './Components/Add';
import Edit from './Components/Edit';
import View from './Components/View';
import Pagenotfound from './Components/Pagenotfound';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">

       {/* {/localhost:3000/admin/} */}
  <Routes>
    <Route path='' element={<Admin/>}/>
    <Route path='add' element={<Add/>}/>
    <Route path='view/:id' element={<View/>}/>
    <Route path='edit/:id' element={<Edit/>}/>
    <Route path='*' element={<Pagenotfound/>}/>
    
  </Routes>
      </header>
    </div>
  );
}

export default App;