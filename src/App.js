import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/home';
import AddPage from './pages/add';
import EditPage from './pages/edit';
import LoginPage from './pages/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/add' element={<AddPage/>}/>
        <Route path='/edit/:id' element={<EditPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
