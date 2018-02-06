import { CHANGE_TITLE } from './HeaderActions'

const HeaderReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                text: action.text
            }
        default:
            return state
    }
  }

export default HeaderReducer
