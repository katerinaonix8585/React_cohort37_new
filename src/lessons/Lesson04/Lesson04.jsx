import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Counter from "../../components/Counter/Counter";

function Lesson04 (){
   {
    /* 2 способ передачи функции */
   }


const showMessage = () => {
    alert("Hi");
};

const showNameMessage = (userName) => {
    alert(`Hello. ${userName}`);
};

const onChange = (event, message) => {
    // console.log(event);
    console.log(`${event.target.value} - ${message}`);
};

return (
    <div className="lesson04-container">
        <Counter />


        {/* <Input onInputChange={(event) => onChange(event, 'value')}/>
        {/* 1 способ передачи функции */}
        {/* <Button name='Func Inner' onButtonClick={() => alert("Hi") }/> */}
        {/* <Button name='Func Outer' onButtonClick={showMessage}/> */}
        {/* 3 способ передачи функции */}
        {/* <Button name='Func With Parametrs' onButtonClick={() => showNameMessage("Tom")}/> */}
    </div>        
       );
}

export default Lesson04;