import './styles.scss'

const BurgerMenu = () => {
    return (
        <div className="burgerMenu"
        /* onClick={toggleNavbarVisibility}
        ref={burgerMenuRef} */
        >
            <div className="burgerText">MENU</div>
            <div className="drawing">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}

export default BurgerMenu