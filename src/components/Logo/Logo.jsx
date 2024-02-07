import LogoImage from '@/assets/logo/logo.png';

import './styles.scss'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={'/'} className='logo'>
            <img src={LogoImage} alt="" />
            <p>QUEER<br />PULSE</p>
        </Link>
    )
}

export default Logo