import SectionTitle from '@/components/SectionTitle/SectionTitle';
import './styles.scss';
import ProjectCard from './ProjectCard/ProjectCard';

const projectsData = [
    {
        id: 1,
        name: 'Project Rainbow Voices',
        description: 'Amplifying LGBTQ+ voices through storytelling and digital media to foster understanding and promote inclusivity.',
        type: 'community',
    },
    {
        id: 2,
        name: 'Queer Youth Empowerment Network',
        description: 'Dedicated to supporting LGBTQ+ youth through resources, mentorship, and safe spaces to empower the next generation of queer leaders.',
        type: 'community',
    },
    {
        id: 3,
        name: 'TransTech Innovators Hub',
        description: 'Bridging technology and transgender empowerment by offering training programs, mentorship, and advocating for inclusivity in STEM fields.',
        type: 'business',
    },
    {
        id: 4,
        name: 'Safe Haven Pride Center',
        description: 'Providing a safe and welcoming space with support services, workshops, and social events to foster a sense of belonging within the LGBTQ+ community.',
        type: 'community',
    },
    {
        id: 5,
        name: 'Queer Health Collective',
        description: 'Addressing unique healthcare needs of the LGBTQ+ community through educational resources, health clinics, and advocacy for accessible and affirming healthcare.',
        type: 'social',
    },
    {
        id: 6,
        name: 'Rainbow Arts Festival',
        description: 'Celebrating the vibrant creativity of the LGBTQ+ community by showcasing and supporting queer artists through exhibitions, performances, and workshops.',
        type: 'event',
    },
];


const Projects = () => {
    return (
        <section className='projects'>
            <SectionTitle title="Get to know our projects" />
            <div className="projects-container">
                {projectsData.map((project) => <ProjectCard key={project.id} name={project.name} description={project.description} type={project.type} />)}
            </div>
        </section>
    )
}

export default Projects