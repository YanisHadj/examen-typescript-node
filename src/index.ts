import { readFileSync } from "fs";



interface Person {
  age:number
  height:number
}

interface StatisticsResult {
  meanAge: number;
  meanHeight: number;
}

function getStatistics():StatisticsResult {
  const persons:Person[] = JSON.parse(readFileSync("./persons.json").toString());
  if (persons.length === 0) {
    throw new Error("Le fichier persons.json est vide.");
  }

  let totalAge = 0;
  let totalHeight = 0;

  for (const person of persons) {
    totalAge += person.age;
    totalHeight += person.height;
  }

  const meanAge = totalAge / persons.length;
  const meanHeight = totalHeight / persons.length;

  return { meanAge, meanHeight };
}


function displayResult() {
  console.log(getStatistics());
}
displayResult();
