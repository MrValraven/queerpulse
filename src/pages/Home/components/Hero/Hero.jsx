
import './styles.scss';
import Button from '@/components/Button/Button';

const Hero = () => {
    return (
        <section className='hero'>
            <div className="heroText">
                <h1>Unleashing creativity <br /> in a diverse world</h1>
                <p>We empower creative LGBTQ+ individuals, to turn their visions into reality by providing an inclusive environment where diversity is celebrated, and where collaboration, mentorship, innovation, and art intersect to create a positive impact on the world.</p>
                <Button text="Join us!" />
            </div>
        </section>
    )
}

export default Hero