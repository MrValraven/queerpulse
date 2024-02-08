import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './styles.scss'

const Footer = () => {
    const getCurrentYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <footer>
            <Logo variant="light" />
            <div className="sitemap">
                <h4>Get to know our projects!</h4>
                <ul>
                    <li><Link to={'/mission'}>Mission</Link></li>
                    <li><Link to={'/projects'}>Projects</Link></li>
                    <li><Link to={'/team'}>Team</Link></li>
                </ul>
            </div>
            <div className="socials">
            </div>
            <div className="footer-bottom">

                <p>©{getCurrentYear()} Queer Pulse</p>
            </div>
        </footer>
    )
}

export default Footer