import './styles.scss'
import Hero from './components/Hero/Hero'
import Projects from '../Projects/Projects'
import Mission from './components/Mission/Mission'
import Community from '../Community/Community'

const Home = () => {
    return (
        <div>
            <Hero />
            <Mission />
            <Community />
            <Projects />
        </div>
    )
}

export default Home