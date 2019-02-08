import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2 search'>
			<input 
				className='search' 
				type='search' 
				placeholder=''
				onChange={searchChange} 
				autofocus='true'
			/>
		</div>
	);
}

export default SearchBox;