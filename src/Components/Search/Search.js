import React from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <section className="search">
            <h3 className="search-title">Hola, contanos</h3>
            <h3 className="search-title">¿De qué comunidad sos parte?</h3>
            <div className="search-container">
                <button className="search-container-icon"><FontAwesomeIcon icon={faSearch} /></button>
                <input className="search-container-input" placeholder="Busca tu comunidad" />
            </div>
            {/*    <ButtonList /> */}
        </section>
    );
}

export default Search;