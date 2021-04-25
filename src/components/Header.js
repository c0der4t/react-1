import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = (props) => {

    const currLocation = useLocation()


    return (
       <header className='header'>
           <h1> {props.title}</h1>
           {currLocation.pathname === '/' && <Button onClick={props.ShowAddClicked} color='green' 
           text={props.AddButtonText ? ' X ' : 'Add'}/>}
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
