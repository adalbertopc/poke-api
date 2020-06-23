import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemonArr: [],
			search: '',
		};
	}

	imprimir = () => {
		console.log(this.state.pokemonArr);
	};

	componentDidMount() {
		this.fetchPokemon();
	}

	fetchPokemon = async () => {
		const pokemonFetch = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
		const pokemonFetchResponse = await pokemonFetch.json();
		const pokemonFetchJson = await pokemonFetchResponse;
		const results = pokemonFetchJson.results;
		for (const result of results) {
			const pokeFetch = await fetch(result.url);
			const pokeFetchResponse = await pokeFetch.json();
			const resultado = pokeFetchResponse;
			this.setState({
				pokemonArr: [...this.state.pokemonArr, resultado],
			});
		}
	};

	handleChange = (e) => this.setState({ search: e.target.value });
	render() {
		const filtro = this.state.pokemonArr.filter((pokemon) => {
			return pokemon.name.toLowerCase().includes(this.state.search.toLowerCase());
		});

		return (
			<div className='App'>
				<h1 className='pokedex-title'>Pokedex Kanto</h1>
				<button onClick={this.imprimir}>Imprimir</button>
				<SearchBox placeholder='buscar pokemon' handleChange={this.handleChange} />
				<CardList pokemons={filtro} />
			</div>
		);
	}
}
