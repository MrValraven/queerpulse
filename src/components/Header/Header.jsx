import Logo from '../Logo/Logo'
import Navbar from './Navbar/Navbar'

import './styles.scss'

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header