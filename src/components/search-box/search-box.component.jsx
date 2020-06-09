import React from 'react';
export const SearchBox = (props) => {
	return (
		<input
			type='search'
			onChange={props.handleChange}
			placeholder={props.placeholder}
		></input>
	);
};
