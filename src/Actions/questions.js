export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
const requestQuestions = () => {
    return {
        type: REQUEST_QUESTIONS
    }
}

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
const receiveQuestions = questions => {
    return {
		type: RECEIVE_QUESTIONS,
		questions
    }
}

export const SET_CURRENT = 'SET_CURRENT'
const setCurrentQuestion = index => {
    return {
		type: SET_CURRENT,
		index
    }
}

export const STORE_ANSWER = 'STORE_ANSWER'
export const setAnswer = answer => {
    return {
		type: STORE_ANSWER,
		answer
    }
}

export const SET_FINISHED = 'SET_FINISHED'
export const setFinished = () => {
    return {
		type: SET_FINISHED,
		finished: true
    }
}

export const SET_RESULT = 'SET_RESULT'
export const setResult = result => {
    return {
		type: SET_RESULT,
		result
    }
}

export const fetchQuestions = () => {
    return (dispatch, getState) => {
        dispatch(requestQuestions())
		return fetch('/api/questions')
		.then(res => res.json(), err => new Error(err))
		.then(questions => {
			dispatch(receiveQuestions(questions))
			dispatch(setCurrentQuestion(0))
		})
    }
}

export const nextQuestion = () => {
	return (dispatch, getState) => {
		const questions = getState().questionsReducer.questions
		const index =  getState().questionsReducer.index

		if (index + 1 <= questions.length - 1) {
			dispatch(setCurrentQuestion(index + 1))
		}

		if (index + 1 === questions.length - 1) {
			dispatch(setFinished())
		}

    }
}
export const submitAnswers = () => {
    return (dispatch, getState) => {
		return fetch('/api/questions', {
			method: 'POST',
			body: JSON.stringify(getState().questionsReducer.answers),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
		.then(res => res.json(), err => new Error(err))
		.then(result => {
			dispatch(setResult(result.procent))
		})
    }
}
