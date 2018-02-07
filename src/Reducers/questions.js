import { REQUEST_QUESTIONS, SET_CURRENT, RECEIVE_QUESTIONS, STORE_ANSWER } from '../Actions/questions'

const defaultState = {
	isFetching: false,
	current: {},
	questions: [],
	answers: [],
	index: 0
}

const questionsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case REQUEST_QUESTIONS:
		return Object.assign({}, state, {
			isFetching: true
		})
		case SET_CURRENT:
		return Object.assign({}, state, {
			current: state.questions[action.index],
			index: action.index
		})
		case RECEIVE_QUESTIONS:
		return Object.assign({}, state, {
			isFetching: false,
			questions: action.questions
		})
		case STORE_ANSWER:
		return Object.assign({}, state, {
			answers: [
				...state.answers,
				action.answer
			]
		})
		default:
			return state
	}
}
export default questionsReducer
