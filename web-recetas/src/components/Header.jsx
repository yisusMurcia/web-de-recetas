import React from 'react';

const Header = ({name}) => {
    return (
        <header>
            <h1>Bienvend@ {name? name + ", ": ""}</h1>
            <h2>A solo recetas</h2>
        </header>
    );
}

export default Header;
