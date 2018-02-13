import React, { Component } from 'react';
import { Component as Button } from '../../Components/Button'
import dots from '../../Assets/images/dots.png'
class Questions extends Component {
	static contextTypes = {
        router: () => null
	}

	constructor(props) {
		super(props)
		this.state = {
			answer: false
		}
		this.setAnswerForQuestion.bind(this);
	}

	componentWillMount () {

		if (!this.props.email) {
			this.context.router.history.push('/')
			return
		}

		if (this.props.result) {
			this.context.router.history.push('/results')
			return
		}

		if (this.props.questions.length === 0) {
			this.props.fetchQuestions()
		}
	}

    render() {
        return(
			<div className="app-questions">
				<div className="app-questions__header" style={{ backgroundImage: `url(${ dots })` }}>
					<div className="app-questions__title">Question {this.props.questionNumber}.</div>
					<h1>{this.props.currentQuestion.question}</h1>
				</div>
				<div className="app-questions__progress" style={ {width: (100 / this.props.questions.length) *  this.props.questionNumber + '%'} }></div>
				<div className="app-questions__answers">
					{this.props.currentQuestion.answers && this.props.currentQuestion.answers.map(answer => {
						return(
							<div className="app-questions__answer" key={answer.id}>
								<label className="app-questions__answer-container app-container" for={'answer' + answer.id}>
									<input id={'answer' + answer.id} name="answer" checked={this.state.answer === answer.id}  type="radio" value={answer.id} onChange={ () => this.setAnswerForQuestion(answer.id)}/>
									{ answer.text }
								</label>
							</div>
						)
					})}
				</div>
				<div className="app-container">
					{(!this.props.questionsFinished) ? <Button text="Next question" onClick={() => this.proceedToNextQuestion()}/> : <Button text="Finish" onClick={() => this.finishQuestions()}/>}
				</div>
			</div>
        )
	}

	setAnswerForQuestion (id) {
		this.setState({ answer: id })
	}

	proceedToNextQuestion () {
		if (this.state.answer) {
			this.setState({ answer: false })
			this.props.setAnswer({
				question: this.props.currentQuestion.id,
				answer: this.state.answer
			})
			this.props.nextQuestion()
		}
	}

	finishQuestions () {
		if (this.state.answer) {
			this.props.setAnswer({
				question: this.props.currentQuestion.id,
				answer: this.state.answer
			})
			this.props.submitAnswers().then(() => {
				this.context.router.history.push('/results')
			})
		}
	}
}

export default Questions;
