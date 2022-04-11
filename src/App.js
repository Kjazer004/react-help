import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Navigate to="/home"/>}></Route>
            <Route path='/home' element={< Home />}></Route>
            <Route path='/dashboard' element={< Dashboard />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
