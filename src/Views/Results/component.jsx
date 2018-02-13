import React, { Component } from 'react'
import Logo from '../../Assets/images/logo.svg'
import { Component as Button } from '../../Components/Button'
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
			<div className="app-welcome app-container">
				<div className="app-welcome__logo">
					<img src={Logo} alt="Quiz app logotype"/>
				</div>
				<div className="app-welcome__text">
					<h1>Congratulations!</h1>
					<p>Thanks for answering, this is how you did on a test: </p>
					<h2>{this.props.result}%</h2>
					<Button text="Try again" onClick={() => window.location.href = '/'}/>
				</div>
			</div>
        )
	}
}

export default Results;
