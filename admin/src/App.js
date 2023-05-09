import './App.css';
import Home from './views/Home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/Home/login';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
    </Router>
    </>
          
  );
}

export default App;
