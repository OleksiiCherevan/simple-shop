import './style.scss'

const ButtonSecondary = (props) => {
    const {children, height='4rem', width=256} = props 

    return (
        <button className="button-secondary" style={{height: height, width: width}}>{children}</button>
    )
}

export default ButtonSecondary