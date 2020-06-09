import React from 'react';
import { Stats } from '../stats/stats.component';
import './card.styles.css';

export const Card = (props) => {
	return (
		<div className='card'>
			<div className='imagen'>
				<img alt='' src={props.pokemon.sprites.front_default}></img>
			</div>
			<div className='info'>
				<h1 className='name'>{props.pokemon.name}</h1>
				<Stats key={props.pokemon.id} stats={props.pokemon.stats} />
				<p>Altura: {props.pokemon.height}cm</p>
				<p>Peso: {props.pokemon.weight}kg</p>
			</div>
			<div className='info-extra'>
				<span className='numero-dex'>#{props.pokemon.id}</span>
			</div>
		</div>
	);
};
