import React from 'react';

export const Stats = (props) => {
	return (
		<div className='stats'>
			{props.stats.map((stat) => {
				return (
					<p>
						{stat.stat.name}: {stat.base_stat}
					</p>
				);
			})}
		</div>
	);
};
