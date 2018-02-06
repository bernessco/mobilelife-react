import { UPDATE_EMAIL } from '../Actions/user'

const defaultState =  {
	email: null
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_EMAIL:
            return {
                email: action.email
            }
        default:
            return state
    }
  }

export default UserReducer
