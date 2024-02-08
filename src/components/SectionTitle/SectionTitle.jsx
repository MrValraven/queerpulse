import './styles.scss';
import LogoImage from '@/assets/logo/logo.png';

const SectionTitle = ({ title }) => {
    return (
        <h1 className='section-title'>
            <img src={LogoImage} alt="" />
            <span>{title}</span>
        </h1>
    )
}

export default SectionTitle