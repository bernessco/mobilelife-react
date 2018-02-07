import React, { Component } from 'react';
import { Component as Button } from '../../Components/Button'
import { Component as Input } from '../../Components/Input'
import dots from '../../Assets/images/dots.png'
class Questions extends Component {
	static contextTypes = {
        router: () => null
	}

	componentWillMount () {

		// if (!this.props.email) {
		// 	this.context.router.history.push('/')
		// 	return
		// }

		if (this.props.questions.length === 0) {
			this.props.fetchQuestions()
		}
	}

    render() {
        return(
			<div className="app-questions">
				<div className="app-questions__header" style={{ backgroundImage: `url(${ dots })` }}>
					<div className="app-questions__title">Question 1.</div>
					<h1>{this.props.currentQuestion.question}</h1>
				</div>
				<div className="app-questions__progress"></div>


				<div className="app-container">
					{!this.props.isFetching && <Button text="Next question" onClick={() => this.props.nextQuestion()}/> }
				</div>
			</div>
        )
    }
}

export default Questions;
