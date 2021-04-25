import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {



    return (
       <header className='header'>
           <h1> {props.title}</h1>
           <Button onClick={props.ShowAddClicked} color='green' 
           text={props.AddButtonText ? ' X ' : 'Add'}/>
       </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker'
}


Header.propTypes = {
    title : PropTypes.string
}

//Stylin css in .js file as a drop in variable
// const headerstyle = {
//     color : 'green',
// }

export default Header
