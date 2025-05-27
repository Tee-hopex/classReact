import "./Button.css"

function Button(props){
    return (
        <button className={`button${props.number}`}>
            {props.buttonText}
        </button>
    );
}

export default Button;