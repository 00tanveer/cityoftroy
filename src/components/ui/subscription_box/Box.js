import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import theme from '../../../styles/theme';

import Button from '../../../components/ui/Button';

const StyledBox = styled.div`
	.container {
		position: relative;
		color: white;
		background-color: ${theme.maroon};
		height: 80vh;
		width: 70vw;
		margin: 100px auto 100px auto;
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center; */
		.i1 {
			position: absolute;
			top: -40px;
			left: 50%;
			transform: translate(-50%, 0);
			text-align: center;
			font-family: "Great Vibes", cursive;
			font-size: 6rem;
			z-index: 3000;
		}
		.i2 {
			width: 60vw;
			position: absolute;
			top: 13vh;
			left: 50%;
			transform: translate(-50%, 0);
			text-align: center;
			line-height: 1.6;
			font-family: 'Raleway', sans-serif;
			font-size: 2.4rem;
		}
		form {
			width: 40vw;
			height: 25vh;
			position: absolute;
			top: 40vh;
			left: 50%;
			transform: translate(-50%, 0);
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			input {
				display: block;
				line-height: 1.5;
				font-size: 20px;
			}
		}
	}
`;

const exampleData = [
  {
		start: 'self',
		end: '90vh',
    //startOffset: 200,
    duration: 150,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'scale',
			},
			{
				startValue: 0,
				endValue: 1,
				property: 'opacity'
			}
    ]
	},
	{
		start: '.filler',
		startOffset: 200,
		duration: 350,
		properties: [
			{
				startValue: 1,
				endValue: 0,
				property: 'opacity'
			}
		]
	}
]

class Box extends React.Component {
	constructor(props) {
			super(props);
	}

	render() {
		return(
			<StyledBox>
				<Plx
					className="example"
          parallaxData={exampleData}>
					<div className="container">
						<p className="i1">Subscribe</p>
						<p className="i2">Hey everyone! Don't want to miss any of my stories? Sign up via email to receive updates about my latest and greatest!</p>
						<form>
							<input 
								className="name"
								value="name"
								type="text"
								placeholder="YOUR FIRST NAME"/>
							<input 
								className="email"
								value="email"
								type="email"
								placeholder="YOUR EMAIL" />
							<Button label="SIGN ME UP"/>
						</form>
					</div>
				</Plx>
			</StyledBox>
		);
	} 
}

export default Box;