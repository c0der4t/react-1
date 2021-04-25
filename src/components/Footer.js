import { Link, useLocation } from 'react-router-dom'

function Footer() {

    const currentlocation = useLocation()

    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            {currentlocation.pathname !== '/about' && <Link to='/about'>About</Link>}
        </footer>
    )
}

export default Footer
