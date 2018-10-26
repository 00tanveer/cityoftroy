import React from 'react';

class Article extends React.Component {
	constructor(props) {
		super(props);
		const {match} = this.props;
		console.log(match);
	}

	render() {
		return(
			<div>Hello</div>
		);
	}
}

export default Article;