import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src="https://m.media-amazon.com/images/G/01/gno/images/general/backup-logo_blue_2x._CB481604563_.png" alt='amazon-logo'/>
      
      <div className="header__search">
        <input className='header__searchInput' type='text'/>
        {/* Logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Option 1 */}
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>
            Hello Guest
          </span>
          <span className='header__optionLineTwo'>
            Sign In
          </span>
        </div>
        
        {/* Option 2 */}
        <div className='header__option2'>
        <span className='header__optionLineOne'>
            Returns
          </span>
          <span className='header__optionLineTwo'>
            Orders
          </span>
        </div>

        {/* Option 3 */}
        <div className='header__option3'>
        <span className='header__optionLineOne'>
            Your
          </span>
          <span className='header__optionLineTwo'>
            Prime
          </span>
        </div>

      </div>

    </div>
  )
}

export default Header
