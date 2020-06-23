import React from 'react';

export const Stats = ({ stats }) => {
	return (
		<div className='stats'>
			{stats.map((stat, index) => {
				return (
					<p key={index}>
						{stat.stat.name}: {stat.base_stat}
					</p>
				);
			})}
		</div>
	);
};
