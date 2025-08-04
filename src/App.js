import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // The old way
import { auth } from './firebase'; 
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Footer from './Footer';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// API Public key (no need to hide)
const promise = loadStripe('pk_test_51RrW8qGbHmEA222PCjwsISeWgjXxITjtkc3JXhLGCiHxvgA1F1qHtH3UtMjMj8jhp39EHJ2D1wGUJFb1IrCnzeJc00WTU021Y7')

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
          <Route path="/orders" element={
            <>
              <Header />
              <Orders/>
            </>
          } />
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
          <Route path="/payment" element={
            <>
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
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
        <Footer/>
      </div>      
    </Router>
  );
}

export default App;