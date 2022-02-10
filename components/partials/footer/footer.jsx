import { useRouter } from 'next/router';
import ALink from '~/components/features/alink';
import React, { useState, useEffect } from 'react';
import Support from './support';
import Payment from './payment';

function Footer () {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        handleBottomSticky();
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky () {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <>
            <div className='container'>
            <h2 className="title text-center mb-2">Excellent Customer Support</h2>
            <Support />
            </div>
        <footer className="footer footer-dark">
            <div className="footer-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-6 ">
                            <div className="widget widget-about">
                                <ALink href="/">
                                    <img src="images/home/logo-footer.png" className="footer-logo" alt="Footer Logo" width="104" height="24" />
                                </ALink>
                                <p>Contact the Media Mister Team with any questions you have, or to discuss your requirements in more detail. </p>
                                <br/>
                                <p>Weekdays : 9 AM - 6 PM | Saturday : 9 AM - 1 PM</p>

                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <Payment img="stripe.png" />
                                <Payment img="alipay.png" />
                                <Payment img="paypal.png" />
                                <Payment img="sofort.png" />
                                <Payment img="debit.png" />
                                <Payment img="bitcoin.png" />
                                <Payment img="paysafe.png" />
                                <Payment img="klarna.png" />
                            </div>
                        </div>

                        <div className="col-sm-3  d-flex align-items-center justify-content-center flex-column mb-3">
                            <div className="widget">
                                <h4 className="widget-title">Quick Links</h4>

                                <ul className="widget-list">
                                    <li><ALink href="/">Home</ALink></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Affiliate Program</a></li>
                                    <li><ALink href="#">Blog</ALink></li>
                                    <li><ALink href="pages/contact">Contact</ALink></li>
                                </ul>
                            </div>
                            
                            <div className="social-icons d-flex justify-content-between">
                                    <a href="#" className="social-icon" title="Facebook" onClick={ e => { e.preventDefault(); } }><i className="icon-facebook-f"></i></a>
                                    <a href="#" className="social-icon" title="Twitter" onClick={ e => { e.preventDefault(); } }><i className="icon-twitter"></i></a>
                                    <a href="#" className="social-icon" title="Pinterest" onClick={ e => { e.preventDefault(); } }><i className="icon-pinterest"></i></a>
                                </div>
                        </div>

                        <div className="col-sm-3  d-flex align-items-center justify-content-center flex-column">
                            <div className="widget">
                                <h4 className="widget-title">Popular Services</h4>

                                <ul className="widget-list">
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Buy YouTube Views</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Buy YouTube Subscribers</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Buy Instagram Followers</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Buy Twitter Followers</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Buy YouTube Likes</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Buy Spotify Followers</a></li>
                                    <li><a href="#" onClick={ e => { e.preventDefault(); } }>Buy Spotify Plays</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ containerClass }>
                    <p className="footer-copyright">© 2012-{ ( new Date() ).getFullYear() } Media Mister.</p>
                    <figure className="footer-payments">
                        
                    <p><a href='#'>Home</a> |&nbsp;
                        <a href='#'>Affiliate Program</a> |&nbsp;
                        <a href='#'>Contact</a> |&nbsp;
                        <a href='#'>Terms of Services</a> |&nbsp;
                        <a href='#'>Privacy Policy</a> |&nbsp;
                        <a href='#'>Refund Policy</a>
                    </p>
                    </figure>
                </div>
            </div>
            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
        </>
    );
}

export default React.memo( Footer );