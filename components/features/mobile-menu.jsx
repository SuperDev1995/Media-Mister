import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';
import MobileItem from '../home/mobile-item';
import { navTitles } from '~/contents/navbar';

function MobileMenu () {
    const router = useRouter();
    const [ searchTerm, setSearchTerm ] = useState( "" );

    useEffect( () => {
        router.events.on( 'routeChangeComplete', hideMobileMenu );
    }, [] )

    function hideMobileMenu () {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange ( e ) {
        setSearchTerm( e.target.value );
    }

    function onSubmitSearchForm ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop/sidebar/list',
            query: {
                searchTerm: searchTerm,
                category: ""
            }
        } );
    }

    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close" onClick={ hideMobileMenu }><i className="icon-close"></i></span>

                <form action="#" method="get" onSubmit={ onSubmitSearchForm } className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                    <input type="text" className="form-control" value={ searchTerm } onChange={ onSearchChange } name="mobile-search" id="mobile-search" placeholder="Search product ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </form>

                <nav className="mobile-nav">
                    <ul className="mobile-menu">

                        {
                            navTitles.map((title,idx) => <MobileItem key={idx} name={title} />)
                        }
                    </ul>
                </nav>

                <div className="social-icons">
                    <ALink href="#" className="social-icon" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                    <ALink href="#" className="social-icon" title="Twitter"><i className="icon-twitter"></i></ALink>
                    <ALink href="#" className="social-icon" title="Instagram"><i className="icon-instagram"></i></ALink>
                    <ALink href="#" className="social-icon" title="Youtube"><i className="icon-youtube"></i></ALink>
                </div>
            </div>
        </div>
    )
}

export default React.memo( MobileMenu );