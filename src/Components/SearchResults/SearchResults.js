import React from "react";
// import React, { useEffect } from "react";
import { useParams } from "react-router";
import ButtonListSearch from "../ButtonListSearch/ButtonListSearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
	Link
} from 'react-router-dom';

const SearchResults = () => {
	const { value } = useParams();

	return (
		<React.Fragment>
			<ButtonListSearch
				endpoint={`https://ada-niwok.herokuapp.com/comunidades/${value}`}
			/>		
			<Link to="/" className="btn-back">
				<button type="button" className="btn-back">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                VOLVER A COMUNIDADES
            </button>
			</Link>
			
		</React.Fragment>
	);
};

export default SearchResults;
