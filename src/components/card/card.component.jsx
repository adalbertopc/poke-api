import React from 'react';
import { Stats } from '../stats/stats.component';
import './card.styles.css';

export const Card = ({ pokemon, dataKey }) => {
	const { sprites, name, stats, height, weight, id } = pokemon;
	return (
		<div className='card'>
			<div className='imagen'>
				<img alt='' src={sprites.front_default}></img>
			</div>
			<div className='info'>
				<h1 className='name'>{name}</h1>
				{/* <Stats key={dataKey + 100} stats={stats} />
				<p>Altura: {height}cm</p>
				<p>Peso: {weight}kg</p> */}
			</div>
			<div className='info-extra'>
				<span className='numero-dex'>#{id}</span>
			</div>
		</div>
	);
};
