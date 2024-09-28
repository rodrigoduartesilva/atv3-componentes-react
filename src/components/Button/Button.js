import '../Button/Button.css';

const Button = ({ type, children, onClick }) => {
    return (
        <button type={type} onClick={(event) => {
            event.preventDefault();
            onClick();
        }}>{children}</button>
    )
}

export default Button;