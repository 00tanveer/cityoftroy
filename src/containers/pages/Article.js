import React from 'react';
import axios from 'axios';

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
			<div>Hello</div>
		);
	}
}

export default Article;