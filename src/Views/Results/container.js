import { connect } from 'react-redux'
import Results from './component.jsx'


const mapStateToProps = state => {
    return {
		result: state.questionsReducer.result || false
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const ResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)

export default ResultsContainer
