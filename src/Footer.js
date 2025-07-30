import React from 'react';
import './Footer.css';

function Footer() {

    const scrollToTopSmooth = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className='footer'>
            <div className='footerSpacer' /> {/* Empty space */}
            {/* Back to top */}
            <button onClick={scrollToTopSmooth} className='backToTop'>
                Back to top
            </button>
            {/* Amazon options */}
            <div className='navFooter'>
                <div className='navFooter__textContainer'>
                    <div className='navFooter__list'>
                        <h4>Get to Know Us</h4>
                        <ul>
                            <li><a href='/'>Careers</a></li>
                            <li><a href='/'>Blog</a></li>
                        </ul>
                    </div>
                    <div className='navFooter__list'>
                        <h4>Make Money with Us</h4>
                        <ul>
                            <li><a href='/'>Careers</a></li>
                            <li><a href='/'>Blog</a></li>
                        </ul>
                    </div>
                    <div className='navFooter__list'>
                        <h4>Amazon Payment Products</h4>
                        <ul>
                            <li><a href='/'>Careers</a></li>
                            <li><a href='/'>Blog</a></li>
                        </ul>
                    </div>
                    <div className='navFooter__list'>
                        <h4>Let Us Help You</h4>
                        <ul>
                            <li><a href='/'>Careers</a></li>
                            <li><a href='/'>Blog</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className='navFooter__amazon'>
                    <div className='navFooter__amazonLinks'>
                        <a href='/'>
                            <img className='footer__logo' src='https://m.media-amazon.com/images/G/01/gno/images/general/backup-logo_blue_2x._CB481604563_.png' alt='amazon-logo'/>
                        </a>
                        <div className='navFooter__languageLinks'>
                            <button>🌐 English</button>
                            <button>$ USD - U.S. Dollar</button>
                            <button> &#x1F1FA;&#x1F1F8; United States</button>
                        </div>                    
                    </div>
                    
                </div>

            </div>
            {/* More links Links footer */}
            <div className='navFooterMore'>
                <ul className='navFooterMore__list'>
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
                    <a href='/'>Conditions of Use</a>
                    <a href='/'>Privacy Notice</a>
                    <a href='/'>Consumer Health Data Privacy Disclosure</a>
                    <a href='/'>Your Ads Privacy Choice</a>
                    </li>
                    <li>
                    <span>© 2025-2025, AmazonCopy.com, Inc. or its affiliates</span> 
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Footer
