import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <header>
            <h1>{props.name}</h1>
        </header>
    );
}

export default Header;