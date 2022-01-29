import './style.scss'

const ButtonPrimary = (props) => {
    const {children, height='4rem', width=256} = props 

    return (
        <button className="button-primary" style={{height: height, width: width}}>{children}</button>
    )
}

export default ButtonPrimary