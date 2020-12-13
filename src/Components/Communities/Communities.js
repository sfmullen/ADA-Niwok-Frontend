import React from "react";
import ButtonList from "../ButtonList/ButtonList";
import Search from "../Search/Search";
import {
	Link
} from 'react-router-dom';


const Communities = () => {
	return (
		<section className="main">
			<Search />
			{/* si no uso el buscador */}
			<ButtonList
				endpoint="https://ada-niwok.herokuapp.com/comunidades/"
			/>
			{/* //si uso el buscador
			<SearchResults />
			//y searchview lo saco */}
			<Link to="/">
				<button type="button" className="btn-back">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                VOLVER A COMUNIDADES
            </button>
			</Link>
		</section>
	);
};

export default Communities;
