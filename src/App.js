import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">           {/* BEM Convention */}
        <Header/>
        <Routes>
          <Route path="/checkout" element={
            <>
              <Checkout/>
            </>
          } />

          {/* Default route always at the bottom */}
          <Route path="/" element={
            <>
              <Home />
            </>
          } />
        </Routes>
      </div>      
    </Router>
  );
}

export default App;