import LogoImage from '@/assets/logo/logo.png';

import './styles.scss'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Logo = ({ variant = 'dark' }) => {
    return (
        <Link to={'/'} className='logo'>
            <img src={LogoImage} alt="" />
            <p className={variant === 'light' ? 'isLightVariant' : ''}>QUEER<br />PULSE</p>
        </Link>
    )
}

export default Logo