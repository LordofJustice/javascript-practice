const lionZebraloc = "L Z"
const totalFieldLength = lionZebraloc.length
let lastFindAnimal = "" ;
let lastFindAnimalLocation = 0;
let wasLion = false;
let wasZebra = false;
let distance = totalFieldLength;

for (let count = 0 ;count < totalFieldLength ;count++){
    let findAnimal = lionZebraloc[count];
    if (findAnimal === "L" || findAnimal === "Z"){
        if (findAnimal === "L"){
            wasLion = true;            
        } else {
            wasZebra = true;           
        }
        if (lastFindAnimal !== "" && lastFindAnimal !== findAnimal){
            distance = count - lastFindAnimalLocation - 1;
        }
        lastFindAnimal = findAnimal;
        lastFindAnimalLocation = count;       
    }
}
if (!(wasLion && wasZebra)){
    console.log("No Hunting Happened", -1 );
} else {
    console.log("Lions will hunt the Zebra and minimum distanse is :" , distance );
    
}
