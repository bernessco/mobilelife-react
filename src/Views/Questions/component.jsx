import React, { Component } from 'react';
import { Component as Button } from '../../Components/Button'
import { Component as Input } from '../../Components/Input'
class Questions extends Component {
	static contextTypes = {
        router: () => null
	}

	componentWillMount () {

		if (!this.props.email) {
			this.context.router.history.push('/')
			return
		}

		if (this.props.questions.length === 0) {
			this.props.fetchQuestions()
		}
	}

    render() {
        return(
			<div className="app-questions app-container">
				<h1>{this.props.currentQuestion.question}</h1>

				<Input placeholder="Answer"/>
				{!this.props.isFetching && <Button text="Next question" onClick={() => this.props.nextQuestion()}/> }
			</div>
        )
    }
}

export default Questions;
