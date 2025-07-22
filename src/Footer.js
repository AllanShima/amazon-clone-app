import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footerSpacer' />
        {/* Back to top */}
        <button className='backToTop'>
            Back to top
        </button>
        {/* Amazon options */}
        <div className='navFooter'>
            <div className='navFooter__textContainer'>
                <div className='navFooter__list'>
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='navFooter__list'>
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li><a>Career</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className='navFooter__list'>
                    <h4>Amazon Payment Products</h4>
                    <ul>
                        <li><a>Career</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className='navFooter__list'>
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li><a>Career</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='navFooter__amazon'>
                <div className='navFooter__amazonOptions'>
                    <img className='footer__logo' src='https://m.media-amazon.com/images/G/01/gno/images/general/backup-logo_blue_2x._CB481604563_.png' alt='amazon-logo'/>
                    <div className='navFooter__languageLinks'>
                        <button>English</button>
                        <button>USD - U.S. Dollar</button>
                        <button>&#x1f1fa;&#x1f1f8; United States</button>
                    </div>                    
                </div>
                
            </div>

        </div>
        {/* More links Links footer */}
        <div className='navFooterMore'>
            <ul>
                <li>
                    <a href='/'>
                        <h5>Amazon Music</h5>
                        <span>Stream millions of songs</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <h5>Amazon Music</h5>
                        <span>Stream millions of songs</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <h5>Amazon Music</h5>
                        <span>Stream millions of songs</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <h5>Amazon Music</h5>
                        <span>Stream millions of songs</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <h5>Amazon Music</h5>
                        <span>Stream millions of songs</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <h5>Amazon Music</h5>
                        <span>Stream millions of songs</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <h5>Amazon Music</h5>
                        <span>Stream millions of songs</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className='navFooterMore__endLine'>
            <ul>
                <li>
                   <a>Conditions of Use</a>
                   <a>Privacy Notice</a>
                   <a>Consumer Health Data Privacy Disclosure</a>
                   <a>Your Ads Privacy Choice</a>
                </li>
            </ul>
            <span>© 2025-2025, AmazonCopy.com, Inc. or its affiliates</span>
        </div>
    </div>
  )
}

export default Footer
