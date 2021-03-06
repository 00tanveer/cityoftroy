import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const StyledContainer = styled.div`
	margin: 20px 20% 20px 20%;
	button {
		color: white;
		cursor: pointer;
		margin: 10px;
		padding: 5px 9px;
		background-color: ${theme.black};
		border: 1px solid ${theme.white};
		//border-radius: 10px;
		transition: all 200ms ease-in;
		&:hover {
			background-color: ${theme.maroon};
			color: ${theme.white};
			transform: scale(1.1);
		}
	}
`;

const Engagement = (props) => {
	return(
		<StyledContainer>
			<button onClick={props.likeHandler}><span>{props.likes} </span>Like</button>
			<span>•</span>
			<button onClick={props.commentHandler}>Comment</button>
			<span>•</span>
			<button onClick={props.shareHandler}><i className="fab fa-facebook"/> Share</button>
		</StyledContainer>
	);
}

export default Engagement;