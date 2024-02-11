import './styles.scss'
import Hero from './components/Hero/Hero'
import Projects from '../Projects/Projects'
import Mission from './components/Mission/Mission'
import Community from '../Community/Community'
import Roadmap from './components/Roadmap/Roadmap'
import Partnerships from '../Partnerships/Partnerships'
import Brands from '../Brands/Brands'

const Home = () => {
    return (
        <section>
            <Hero />
            <Mission />
            <Community />
            <Projects />
            <Brands />
            <Partnerships />
            <Roadmap />
        </section>
    )
}

export default Home