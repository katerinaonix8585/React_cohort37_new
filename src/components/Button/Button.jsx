import "./styles.css";

function Button({ buttonName = 'Get data', isPrimaryButton = false }) {
    const buttonClass = `main-button ${isPrimaryButton ? "primary-button" : "secondary-button"}`;
    
    return <button className={buttonClass}>
        {buttonName}
    </button>;
}


// Lesson02

// function Button() {
// const sendButtonName = 'Send';
// const getButtonName = 'Get';
// const isGetButton = false;     
//     return <button className="main-button">
//        {isGetButton ? getButtonName : sendButtonName} data
//         </button>;
// }

 export default Button;