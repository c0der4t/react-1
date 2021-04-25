import PropTypes from 'prop-types'


function Button(props) {
    return (
             <button 
             onClick={props.onClick}
             style={{ backgroundColor: props.color}} 
             className='btn'>{props.text}</button>
    )
}



Button.defaultProps = {
    color : 'steelblue'
}

Button.propTypes = {
text : PropTypes.string,
color : PropTypes.string,
onClick : PropTypes.func
}

export default Button
