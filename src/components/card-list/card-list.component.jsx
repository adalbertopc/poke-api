import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
	return (
		<div className='card-list'>
			{props.pokemons.map((pokemon) => {
				return <Card key={pokemon.id} pokemon={pokemon} />;
			})}
		</div>
	);
};
