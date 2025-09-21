const lionZebraloc = "L Z"
const totalFieldLength = lionZebraloc.length

for (let count = 0 ;count < totalFieldLength ;count++){
    let findAnimal = lionZebraloc[count];
    if (findAnimal === "L" || findAnimal === "Z"){
        console.log("animal is lion or zebra" , findAnimal);
    }
    console.log("character found in every loop" , findAnimal);
}
