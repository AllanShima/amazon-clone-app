import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">           {/* BEM Convention */}
        <Routes>
          <Route path="/login" element={
            <>
              <Login/>
            </>
          } />
          <Route path="/checkout" element={
            <>
              <Header/>
              <Checkout/>
            </>
          } />

          {/* Default route always at the bottom */}
          <Route path="/" element={
            <>
              <Header/>
              <Home />
            </>
          } />
        </Routes>
      </div>      
    </Router>
  );
}

export default App;