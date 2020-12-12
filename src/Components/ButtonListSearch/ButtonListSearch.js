import React, { Component } from "react";
import Button from "../Button/Button";
import axios from "axios";

class ButtonListSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buscar: props.endpoint,
			communities: [],
			
		};
	}

	componentDidMount() {
		const cargar = `${this.state.buscar}`;
		console.log(cargar)
		axios.get(`${cargar}`).then((res) => {
			console.log(res.data.comunidad)
			const com = res.data.comunidad;
			this.setState({
				communities: com,
            });
        });    
    }
    
    // componentWillUpdate() {
	// 	const cargar = `${this.state.endpoint}`;
	// 	console.log(cargar);
	// 	axios.get(`${cargar}`).then((res) => {
	// 		const com = res.data.results;
	// 		this.setState({
	// 			communities: com,
	// 		});
	// 	});
    // }


	
	render() {
        const { communities } = this.state;
        console.log(communities)
		return (
			<ul className="movies__list">
				{communities.map((u) => (
					<Button coms={u} />
					// pasarle la info aca a las peliculas y quye estas se las pasen el modal?
				))}
				
			</ul>
		);
	}
}

export default ButtonListSearch;
