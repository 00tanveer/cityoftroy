import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';

const StyledBox = styled.div`
	.container {
		color: white;
		background-color: #872e2e;
		height: 80vh;
		width: 80vw;
		margin: 100px auto 100px auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		p {
			text-align: center;
			font-size: 4rem;
			z-index: 3000;
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
					<div className="container"><p>Subscribe</p></div>
				</Plx>
			</StyledBox>
		);
	} 
}

export default Box;