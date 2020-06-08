import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

export class App extends Component {
	constructor() {
		super();

		this.state = {
			pokemonArr: [],
		};
	}

	imprimir = () => {
		console.log(this.state.pokemonArr);
	};

	async componentDidMount() {
		const allPokemon = [];
		fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
			.then((response) => response.json())
			.then((pokemons) =>
				pokemons.results.forEach((pokemon) => {
					fetch(pokemon.url)
						.then((response) => response.json())
						.then((datosPoke) => allPokemon.push(datosPoke));
				})
			);
		this.setState({ pokemonArr: allPokemon });
	}

	render() {
		const { pokemonArr } = this.state;
		const pokemons = pokemonArr.map((pokemon) => console.log(pokemon));
		return (
			<div className="App">
				{/* <CardList pokemons={this.state.pokemonArr} /> */}
				<button onClick={this.imprimir}>Imprimir</button>
				<ul>
					{this.state.pokemonArr.map((pokemon) => (
						<li> {pokemon.name}</li>
					))}
				</ul>
			</div>
		);
	}
}
