import React from 'react';

export const CardList = (props) => {
	// console.log(props.pokemons);
	const { pokemons } = props;
	return (
		<div className="card-list">
			{pokemons.map((pokemon) => {
				console.log(pokemon);
				return <h1>{pokemon.name}</h1>;
			})}

			<h1>Hola</h1>
		</div>
	);

	// return props.pokemons.map((pokemon) => <h1 key={pokemon.id}>{pokemon.name}</h1>);
};
