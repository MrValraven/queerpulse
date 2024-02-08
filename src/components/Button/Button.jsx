import './styles.scss'

const Button = ({ text = 'Lorem Impsum' }) => {
    return (
        <button className='default-button'>{text}</button>
    )
}

export default Button