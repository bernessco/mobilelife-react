import { connect } from 'react-redux'
import Questions from './component.jsx'

const mapStateToProps = state => {
    return {
		email: state.userReducer.email || ''
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const QuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)

export default QuestionsContainer
