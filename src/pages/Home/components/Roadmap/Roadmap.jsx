import SectionTitle from '@/components/SectionTitle/SectionTitle';
import './styles.scss';
import RoadmapPhase from './RoadmapPhase/RoadmapPhase';

const phases = [
    {
        id: 0,
        hasPhaseStarted: true,
        title: 'Building the Foundation 🌱',
        goals: [
            { id: 0, text: 'Initial Landing Page', isGoalCompleted: true },
            { id: 1, text: 'Community & Networking Page', isGoalCompleted: true },
            { id: 2, text: 'Queer Pulse hosted Events', isGoalCompleted: false },
            { id: 3, text: 'Community Calendar for LGBTQ+ Events', isGoalCompleted: false },
        ],
    },
    {
        id: 1,
        hasPhaseStarted: false,
        title: 'Connecting Queer Communities 🌈',
        goals: [
            { id: 0, text: 'Queer Pulse App - Connect and meet other queer people', isGoalCompleted: false },
            { id: 1, text: 'Queer Business on the Spotlight', isGoalCompleted: false },
            { id: 2, text: 'Job Board', isGoalCompleted: false },
            { id: 3, text: 'Collaborative Art and Initiatives: Through collaborative art projects, we address LGBTQ+ issues and advocate for equality. Art has a unique power to communicate complex ideas and emotions.', isGoalCompleted: false },
            { id: 4, text: 'Community Engagement: Queer Pulse members actively participate in LGBTQ+ marches, awareness campaigns, and community outreach programs. We believe in being visible allies and advocates in our local and global communities.', isGoalCompleted: false },
            { id: 5, text: 'Launch of "Coloring the Rainbow" - a Queer inclusive digital coloring book', isGoalCompleted: false },
        ],
    },
    {
        id: 2,
        hasPhaseStarted: false,
        title: 'Fostering Community Interaction 🤝',
        goals: [
            { id: 0, text: 'Forum (Proposals, Housing, idea sharing)', isGoalCompleted: false },
            { id: 1, text: 'QueerPulse+ (Membership that gives you special discounts and bonuses to our events and to partners)', isGoalCompleted: false },
            { id: 2, text: 'Weekly Initiatives and Monthly highlight of the most impactful one (maybe even have different categories)', isGoalCompleted: false },
            { id: 3, text: 'Curated Mentor List', isGoalCompleted: false },
        ],
    },
    {
        id: 3,
        hasPhaseStarted: false,
        title: 'Empowering Queer Entrepreneurs and Education 🚀',
        goals: [
            { id: 0, text: 'Release of inHouse tools to support small and mid sized queer owned businesses and individuals such as tools to make it easier to start online shops, portfolios, domain creation (Free sub-domains with queerpulse.com)', isGoalCompleted: false },
            { id: 1, text: 'Educational Outreach: We partner with schools and organizations to provide educational materials and workshops on LGBTQ+ issues, aiming to create a more informed and accepting society.', isGoalCompleted: false },
            { id: 2, text: 'Fundraising for LGBTQ+ Causes: We organize fundraising events and initiatives to support LGBTQ+ charities and organizations that work tirelessly for the rights and well-being of LGBTQ+ individuals.', isGoalCompleted: false },
        ],
    },
    {
        id: 4,
        hasPhaseStarted: false,
        title: 'Creating Spaces and Celebrating Diversity 🎉',
        goals: [
            { id: 0, text: 'Queer Pulse Owned Spaces', isGoalCompleted: false },
            { id: 1, text: 'Affordable Rooms at Queer houses', isGoalCompleted: false },
            { id: 2, text: 'Queer musical festival - celebrate queer musicians', isGoalCompleted: false },
            { id: 2, text: 'Interactive Community Spaces: Create interactive online spaces where members can collaborate on art projects, share stories, and engage in creative expression. ', isGoalCompleted: false },
        ],
    },
];

const Roadmap = () => {
    return (
        <section className='roadmap'>
            <SectionTitle title={'The Queer Pulse Roadmap'} />
            <p>Queer Pulse is more than just an idea incubator; it's a vibrant, inclusive, and dynamic community where creativity, technology, and entrepreneurship converge to create a better, more colorful world. Join us on this exciting journey of self-discovery, innovation, and social impact. Together, we'll make a lasting difference.</p>

            <p className='advocacy'>At Queer Pulse, advocacy is not just a part of what we do; it's at the heart of our mission. We strive to create a world where LGBTQ+ individuals are celebrated, understood, and empowered to be their authentic selves. Through our advocacy efforts, we hope to inspire positive change, foster inclusivity, and leave a lasting legacy of acceptance and equality. Together, we stand strong for a brighter and more inclusive future.</p>
            <div className="phases">
                {phases.map((phase) =>
                    <RoadmapPhase key={phase.id} hasPhaseStarted={phase.hasPhaseStarted} phaseNumber={phase.id} phaseTitle={phase.title} phaseGoals={phase.goals} />
                )}
            </div>
        </section>
    )
}

export default Roadmap