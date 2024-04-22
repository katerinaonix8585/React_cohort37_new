import "./styles.css";
import { animalsData} from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import {v4} from 'uuid';

function Lesson05() {
    // console.log(v4());
    const animalCards = animalsData.map ((animalData) => {
        return <AnimalCard key={v4()} animalData={animalData} />
    });

    return (<div className="lesson05-container">
        {animalCards}    
    </div>
    );

    // return (<div className="lesson05-container">
    //     <AnimalCard animalData={animalsData[0]} />
    //     <AnimalCard animalData={animalsData[1]} />
    //     <AnimalCard animalData={animalsData[2]} />
    //     <AnimalCard animalData={animalsData[3]} />
    // </div>
    // ); 
}

export default Lesson05;