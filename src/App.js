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

	componentDidMount() {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
			.then((response) => response.json())
			// .then((pokemons) => {
			// 	for (const pokemon of pokemons.results) {
			// 		fetch(pokemon.url)
			// 			.then(async (response) => await response.json())
			// 			.then((datosPoke) =>
			// 				this.setState({
			// 					pokemonArr: [...this.state.pokemonArr, datosPoke],
			// 				})
			// 			);
			// 	}
			// });

			.then((pokemons) => {
				pokemons.results.forEach((pokemon) => {
					this.fetchPokemon(pokemon.url);
				});
			});
	}

	fetchPokemon = (url) => {
		fetch(url)
			.then((response) => response.json())
			.then((datosPoke) =>
				this.setState({
					pokemonArr: [...this.state.pokemonArr, datosPoke],
				})
			);
	};

	render() {
		return (
			<div className='App'>
				<button onClick={this.imprimir}>Imprimir</button>
				<CardList pokemons={this.state.pokemonArr} />
			</div>
		);
	}
}
