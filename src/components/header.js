import React from 'react';
import RSymbol from '../images/RSymbol.png';

const Header = () => {

    return (
        <header id='header-content'>
            <div id='header-title-content'>
                <img id='header-img' src={RSymbol} alt='RSymbol' />
                <h1 id='title-text'>U b e r</h1>
            </div>

        </header>
    );
}

export default Header;