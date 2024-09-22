import '../Button/Button.css';

const Button = ({ type, children }) => {
    return (
        <button type={type}>{children}</button>
    )
}

export default Button;