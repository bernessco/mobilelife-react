import { connect } from 'react-redux'
import Questions from './component.jsx'
import { fetchQuestions, setAnswer, nextQuestion } from '../../Actions/questions'

const mapStateToProps = state => {
    return {
		isFetching: state.questionsReducer.isFetching || false,
		currentQuestion: state.questionsReducer.current || {},
		questions: state.questionsReducer.questions || [],
		email: state.userReducer.email || ''
    }
}

const mapDispatchToProps = dispatch => {
    return {
		fetchQuestions: () => dispatch(fetchQuestions()),
		setAnswer: answers => dispatch(setAnswer(answers)),
		nextQuestion: () => dispatch(nextQuestion())
    }
}

const QuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)

export default QuestionsContainer
