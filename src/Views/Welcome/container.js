import { connect } from 'react-redux'
import Welcome from './component.jsx'
import { updateEmail } from '../../Actions/user'

const mapStateToProps = state => {
    return {
		email: state.userReducer.email || ''
    }
}

const mapDispatchToProps = dispatch => {
    return {
		updateEmail: email => dispatch(updateEmail(email))
    }
}

const WelcomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome)

export default WelcomeContainer
