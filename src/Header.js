import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue(); // dont need the dispatch

  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      {/* Amazon Logo */}
      <Link to="/">
        <div className='header__logo'>
          <img className='header__logoImage' src="https://m.media-amazon.com/images/G/01/gno/images/general/backup-logo_blue_2x._CB481604563_.png" alt='amazon-logo'/>        
        </div>
      </Link>
    
      {/* White search bar */}
      <div className="header__search">
        <input className='header__searchInput' type='text' placeholder='Search Amazon'/>
        {/* Logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Option 1 */}
      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
              <span className='header__optionLineOne'>
                Hello {user?.email}
              </span>
              <span className='header__optionLineTwo'>
                {user ? 'Sign Out' : 'Sign In'}
              </span>    
          </div>
        </Link>

        {/* Option 2 */}
        <Link to={'/orders'}>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Returns
            </span>
            <span className='header__optionLineTwo'>
              Orders
            </span>
          </div>
        </Link>
        {/* Option 3 */}
        <div className='header__option'>
          <span className='header__optionLineOne'>
            Your
          </span>
          <span className='header__optionLineTwo'>
            Prime
          </span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>        
        </Link>

      </div>

    </div>
  )
}

export default Header