import './styles.scss';

const CommunityPerkCard = ({ icon, title, description }) => {
    return (
        <div className='community-perk-card'>
            <h4><img src={icon} alt="" /> {title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default CommunityPerkCard