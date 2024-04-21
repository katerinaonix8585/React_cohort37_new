import "./styles.css";

function Button({name, type='button', onButtonClick}){
    return <button onClick={onButtonClick} className="button-component" type={type}>
     {name}
    </button>
}

export default Button;

// Lesson03

// function Button({ buttonName = 'Get data', isPrimaryButton = false }) {
//     const buttonClass = `main-button ${isPrimaryButton ? "primary-button" : "secondary-button"}`;
    
//     return <button className={buttonClass}>
//         {buttonName}
//     </button>;
// }


// Lesson02

// function Button() {
// const sendButtonName = 'Send';
// const getButtonName = 'Get';
// const isGetButton = false;     
//     return <button className="main-button">
//        {isGetButton ? getButtonName : sendButtonName} data
//         </button>;
// }
