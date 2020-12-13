import React, { Component } from "react";
import Button from "../Button/Button";
import axios from "axios";

class ButtonList extends Component {
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
			console.log(res.data.comunidades)
			const com = res.data.comunidades;
			this.setState({
				communities: com,
            });
        });    
    }
	
	render() {
        const { communities } = this.state;
        console.log(communities)
		return (
			<ul className="movies__list">
				{communities.map((u) => (
					<Button coms={u} />
				))}
				
			</ul>
		);
	}
}

export default ButtonList;
