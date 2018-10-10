import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
	const Bar = styled.span`
		.container {
			position: fixed;
			//width: 15vw;
			top: 4vh;
			right: 5px;
			.fa-search {
				//display: inline-block;
				color: white;
				font-size: 3rem;
			}
			input {
				//display: inline-block;
				background-color: black;
				color: white;
				border: none;
				background: none;
				width: 11vw;
				margin-left: 10px;
				font-size: 20px;
				line-height: 1.4;
				&:focus {
						outline: none;
				}
			}
		}
	`
	return (
		<Bar>
			<span className="container">
				<i className="far fa-search"></i>
				<input 
					placeholder="SEARCH"
					type="text"/>
			</span>
		</Bar>
	);
}

export default SearchBar;