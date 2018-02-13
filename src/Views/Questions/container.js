import { connect } from 'react-redux'
import Questions from './component.jsx'
import { fetchQuestions, setAnswer, nextQuestion, submitAnswers } from '../../Actions/questions'

const mapStateToProps = state => {
    return {
		isFetching: state.questionsReducer.isFetching || false,
		currentQuestion: state.questionsReducer.current || {},
		questions: state.questionsReducer.questions || [],
		email: state.userReducer.email || '',
		questionNumber: state.questionsReducer.index + 1 || 1,
		questionsFinished: state.questionsReducer.finished || false,
		result: state.questionsReducer.result || false
    }
}

const mapDispatchToProps = dispatch => {
    return {
		fetchQuestions: () => dispatch(fetchQuestions()),
		setAnswer: id => dispatch(setAnswer(id)),
		nextQuestion: () => dispatch(nextQuestion()),
		submitAnswers: () => dispatch(submitAnswers())
    }
}

const QuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)

export default QuestionsContainer
