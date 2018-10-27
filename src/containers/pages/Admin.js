import React from 'react';
import withAuth from '../../components/HOC/withAuth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`

`;

const Title = styled.p`
	color: white;
	font-size: 3.5rem;
  font-family: "Great Vibes", cursive;
  font-weight: 300;
	margin-top: 20px;
  text-shadow: 0 0 3px white;
  text-align: center;
  letter-spacing: 1rem;
	cursor: pointer;
`;

const SideBar = styled.div`
	position: fixed;
	left: 0;
	height: 100%;
	width: 200px;
	background-color: rgb(8,8,8);
	.row {
		color: grey;
		text-align: center;
		font-size: 2rem;
		font-family: 'Raleway';
		padding: 10px;
		cursor: pointer;
		&:hover {
			color: white;
		}
	}
	#drafts {
		color: ${props => props.selected === 'drafts' ? 'pink' : 'grey'}
	}
	#posted {
		color: ${props => props.selected === 'posted' ? 'pink' : 'grey'}
	}
	.divider {
		position: relative;
		right: 50%;
		transform: translateX(75%);
		width: 80%;
		height: 1px;
		background-color: grey;
		text-align: center;
	}
`;

class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'drafts'
		}
		this.rowClickHandler = this.rowClickHandler.bind(this);
	}

	rowClickHandler() {
		if (this.state.selected === 'drafts') {
			this.setState({ selected: 'posted'});
		} else {
			this.setState({ selected: 'drafts' });
		}
	}

	render() {
		return(
			<StyledContainer>
				<Link style={{ textDecoration: 'none'}} to="/" >
					<Title>City of Troy</Title>
				</Link>
				<SideBar selected={this.state.selected}>
					<div onClick={this.rowClickHandler} className="row" id="drafts">Drafts</div>
					<div className="divider"></div>
					<div onClick={this.rowClickHandler} className="row" id="posted">Posted</div>
				</SideBar>
			</StyledContainer>
		);
	}
}

export default withAuth(Admin);