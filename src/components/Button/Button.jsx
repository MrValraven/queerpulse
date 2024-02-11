import './styles.scss'

const Button = ({ variant, text = 'Lorem Impsum' }) => {
    return (
        <button className={`default-button ${variant === 'secondary' ? 'variant-secondary' : ''}`}>{text}</button>
    )
}

export default Button