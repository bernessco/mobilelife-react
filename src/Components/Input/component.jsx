
import React from 'react'

const Input = ({ type, placeholder, value, onChange, feedback }) => {
    return(
        <div className="app-input-wrapper">
			<input type={ type } placeholder={ placeholder } value={ value } onChange={onChange} className={ feedback ? 'app-input app-input--' + feedback.type  : 'app-input' }/>
			{feedback && <small className={'app-input__feedback app-input__feedback--' + feedback.type }> { feedback.message } </small>}
		</div>
    )
}
export default Input
