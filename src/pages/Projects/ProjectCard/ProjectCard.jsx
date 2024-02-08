import './styles.scss';
import ProjectCardImage from '@/assets/projectCard.jpg'

const TAG_COLORS = {
    business: '#3498db',
    event: '#e74c3c',
    community: '#27ae60',
    social: '#ffcc29',
}

const ProjectCard = ({ name, description, imageURL = ProjectCardImage, url, type }) => {
    return (
        <div className='project-card'>
            <img src={imageURL} alt="" />
            <div className="project-card-text">
                <h3>{name} | <span style={{ backgroundColor: TAG_COLORS[type] }}>{type}</span></h3>
                <p>{description}</p>
                <p>Visit at: <a href={`https://${url}`}>{url}</a></p>
                <div className="other-info">
                    <p>Based in Lisbon</p>
                    <div className="socials"></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard