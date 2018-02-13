import React, { Component } from 'react'

class Results extends Component {
	static contextTypes = {
        router: () => null
	}

	componentWillMount () {
		if (!this.props.result) {
			this.context.router.history.push('/questions')
		}
	}

    render() {
        return(
			<div>{this.props.result}%</div>
        )
	}
}

export default Results;
