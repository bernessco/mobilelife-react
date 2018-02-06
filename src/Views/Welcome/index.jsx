import React, { Component } from 'react';
import Logo from '../../Assets/images/logo2.png';
import { Component as Button } from '../../Components/Button'
import { Component as Input } from '../../Components/Input'
class Welcome extends Component {
	static contextTypes = {
        router: () => null
	}
	constructor(props) {
		super(props)
		this.state = {
			email: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({ email: e.target.value })
	}

    render() {
        return(
			<div className="app-welcome app-container">
				<div className="app-welcome__logo">
					<img src={Logo} alt="Quiz app logotype"/>
				</div>
				<Input type="text" value={ this.state.email } onChange={ this.handleChange } placeholder="Email"/>
				<Button text="Let's Start" onClick={() => this.context.router.history.push('/questions')}/>
			</div>
        )
    }
}

export default Welcome;
