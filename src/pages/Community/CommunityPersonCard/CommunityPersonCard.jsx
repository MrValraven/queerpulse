import './styles.scss';

const CommunityPersonCard = ({ image, name, pronouns, description, clickEvent }) => {
    return (
        <div className='community-person-card' onClick={clickEvent}>
            <div style={{ backgroundImage: `url(${image})` }} className="imageAndName">
                <h3 className="title">{name} <span>({pronouns})</span></h3>
            </div>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="text">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CommunityPersonCard