import React from "react";
import ButtonList from "../ButtonList/ButtonList";
import ButtonListSearch from "../ButtonListSearch/ButtonListSearch"


const Communities = () => {
	return (
		<section className="main">
			{/* <ButtonList
				endpoint="https://ada-niwok.herokuapp.com/comunidades/"
			/> */}
			<ButtonListSearch endpoint="https://ada-niwok.herokuapp.com/comunidades/1"/>
		</section>
	);
};

export default Communities;
