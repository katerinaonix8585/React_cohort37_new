import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import "./styles.css";
import { lionData, zebraData, normalizeName } from "./data.js";
import userAvatar from "../../assets/IMG_5168.jpg"


function Lesson03() {
   const isPrimary = false;

   return (<div className="buttons-container">
      <AnimalCard 
         animalData={lionData} 
         animalName={normalizeName(lionData.name)}
      >
         <p>Main Character</p>
         <h2>Title</h2>
      </AnimalCard>
      <AnimalCard animalData={zebraData} animalName={normalizeName(zebraData.name)} >
         <p>Main Character</p>
      </AnimalCard>
      {/* <img src={userAvatar}/> */}
      <Button isPrimaryButton />
      <Button buttonName="Send data" isPrimaryButton={isPrimary} />
   </div>
   );
}

export default Lesson03;