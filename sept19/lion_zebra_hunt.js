const lionZebraloc = "L Z"
const totalFieldLength = lionZebraloc.length

for (let count = 0 ;count < totalFieldLength ;count++){
    let findAnimal = lionZebraloc[count];
    if (findAnimal === "L" || findAnimal === "Z"){
        if (findAnimal === "L"){
            console.log("Hey! I am Lion. My location is :",count);
        } else {
            console.log("Hey! I am Zebra. Don't tell Lions that i am here:",count);
        }
    }
    console.log("character found in every loop" , findAnimal);
}
