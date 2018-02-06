import React, { Component } from 'react'
import Logo from '../../Assets/images/logo.svg'
import { Component as Button } from '../../Components/Button'
import { Component as Input } from '../../Components/Input'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'

class Welcome extends Component {
	static contextTypes = {
        router: () => null
	}

	constructor(props) {
		super(props)
		this.state = {
			email: this.props.email || '',
			error: false
		}
		this.inputChange.bind(this)
	}

	componentWillMount () {
		if (this.props.email) {
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
					<h1>Welcome to most epic quiz application ever</h1>
					<p>This quiz is made to test what you know about geeky world. To start answering questions <b>enter</b> your <b>email</b> address</p>
				</div>
				<Input type="email" feedback={ this.state.error ? { type: 'error', message: this.state.error } : false } value={ this.state.email } onChange={ (e) => this.inputChange(e) } placeholder="Email"/>
				<Button text="Let's Start" onClick={() => this.submitAndGo()}/>
			</div>
        )
	}

	submitAndGo () {
		if (isEmpty(this.state.email) || !isEmail(this.state.email)) {
			this.setState({ error: 'Please enter a valid email address' })
			return
		}
		this.props.updateEmail(this.state.email)
		this.context.router.history.push('/questions')
	}

	inputChange (e) {
		if (this.state.error) {
			this.setState({error: false})
		}
		this.setState({ email: e.target.value })
	}
}

export default Welcome;
