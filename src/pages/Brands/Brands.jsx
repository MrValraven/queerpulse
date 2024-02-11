import SectionTitle from '@/components/SectionTitle/SectionTitle'

import './styles.scss';
const Brands = () => {
    return (
        <section className='brands'>
            <SectionTitle title={"Shop at our brands"} />
            <ul>
                <li>Whiskered Rainbows</li>
                <li>Arc of Colors Pins</li>
            </ul>
        </section>
    )
}

export default Brands