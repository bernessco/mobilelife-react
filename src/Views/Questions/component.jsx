import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Component as Button } from '../../Components/Button'
import { Component as Input } from '../../Components/Input'
class Questions extends Component {
	static contextTypes = {
        router: () => null
	}

	componentWillMount () {
		if (!this.props.email) {
			this.context.router.history.push('/')
		}
	}
	
    render() {
        return(
			<div className="app-questions app-container">
				<h1>Questions</h1>
				<Link to="/">Welcome</Link>
				<Input placeholder="Answer"/>
				<Button text="Next question"/>
			</div>
        )
    }
}

export default Questions;
