import React from "react";
// import React, { useEffect } from "react";
import { useParams } from "react-router";
import ButtonListSearch from "../ButtonListSearch/ButtonListSearch";

const SearchResults = () => {
	const { value } = useParams();
	// useEffect(() => {
	
	return (
		<ButtonListSearch
				endpoint={`https://ada-niwok.herokuapp.com/comunidades/${value}`}
			/>		
			
	);
	// }, [value]);
};

//El [value] no funciona, deberia servir para volver a buscar si una vez que da los resultados se vuelve a buscar.

// ENDPOINT DE BUSQUEDA `https://api.themoviedb.org/3/search/movie?api_key=12083d05b92b51e4bd659c8b36f81253&query=${textoBusqueda}&page=${paginaActual}`
export default SearchResults;
