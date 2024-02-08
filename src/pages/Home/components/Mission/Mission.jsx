import SectionTitle from '@/components/SectionTitle/SectionTitle';
import './styles.scss';

const Image = 'https://media.istockphoto.com/id/1374561567/pt/foto/group-of-young-activist-for-lgbt-rights-with-rainbow-flag-diverse-people-of-gay-and-lesbian.jpg?s=2048x2048&w=is&k=20&c=MqTy1GVxPxVE365CIg5LXcwwQ12Vqwmfa2BRANKNsnU='

const Mission = () => {
    return (
        <section className='mission'>
            <SectionTitle title={'Our Mission'} />
            <div className="content">
                <div className="text">
                    <p>At Queer Pulse, our mission is simple yet powerful: to empower creative individuals from all backgrounds, with a special focus on the LGBTQ+ community, to turn their visions into reality. We aim to provide an inclusive environment where diversity is celebrated, and where collaboration, innovation, and art intersect to create a positive impact on the world.</p>
                    <p>We celebrate and embrace the rich tapestry of human diversity, with a special focus on our LGBTQ+ family. We stand as an unwavering ally, providing a safe space for all, regardless of gender identity or sexual orientation. Your uniqueness is your strength, and it's exactly what we value.</p>
                    <p>If you want to be part of our vibrant and diverse community at Queer Pulse, we invite you to join us. Whether you're an artist, an entrepreneur, a developer, or simply someone passionate about creativity, you'll find a home at Queer Pulse.</p>
                    <p>Get in Touch: To learn more about Queer Pulse, our initiatives, and how to join us, please contact us through our website or social media channels. We look forward to collaborating with you in building a brighter and more inclusive future.</p>
                </div>
                <div className="images">
                    <img src={Image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Mission