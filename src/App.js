import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase'; 
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads... Kind of like an IF statement
    auth.onAuthStateChanged(authUser => {
      console.log("USER IS >>> ", authUser);

      if (authUser){
        // the user just logged in / was logged in

        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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