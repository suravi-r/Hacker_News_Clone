import './index.css';
import Navbar from './components/Navbar'
import Footer  from './components/Footer';
import Comments from './components/Comments'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="base">
        <Navbar/>
        
        <Routes>
        <Route exact path = "/" element={<Home/>}/> 
        <Route exact path = "/comments" element={<Comments/>}/>  
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
