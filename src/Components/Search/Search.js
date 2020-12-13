import React, { useState } from "react";
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

const Search = () => {
	const [value, setValue] = useState("");
	const history = useHistory();
	const handleChange = (event) => setValue(event.target.value);
	const handleKeyDown = (event) => {
		if (event.keyCode === 13 && value) {
			history.push(`/searchresults/${value}`);
		}
	};

    return (
        <section className="search">
            <h3 className="search-title">Hola, contanos</h3>
            <h3 className="search-title">¿De qué comunidad sos parte?</h3>
            <div className="search-container">
                <button className="search-container-icon">
				<FontAwesomeIcon icon={faSearch} className="icon" />
					</button>
                <input
				className="search-container-input" 
				type="text"
				placeholder="Busca tu comunidad"
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
            </div>
            {/*    <ButtonList /> */}
        </section>
    )
}


export default Search;