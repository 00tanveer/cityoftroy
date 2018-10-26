import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';
const StyledContainer = styled.div`
margin-bottom: 80px;
`;

class Article extends React.Component {
	constructor(props) {
		super(props);
		const {match} = this.props;
		let blogId = match.params.title.split('-');
		blogId = blogId[blogId.length - 1];
		this.state = {
			title: match.params.title,
			blogId: blogId,
			blog: {}
		}
	}

	componentDidMount() {
		axios.get(`/blogs/${this.state.blogId}`).then(res => {
			console.log(res.data.data.docs[0]);
			this.setState({blog: res.data.data.docs[0]});
		});
	}

	render() {
		return(
			<StyledContainer>
				<Header />
				<Footer />
			</StyledContainer>
		);
	}
}

export default Article;