import { readFileSync } from "fs";

interface Person {
  age:number
}

function getStatistics():number {
  const persons:Person[] = JSON.parse(readFileSync("./persons.json").toString());
  if (persons.length === 0) {
    throw new Error("Le fichier persons.json est vide.");
  }

  let maxAge = persons[0].age;

  for (const person of persons) {
    if (person.age > maxAge) {
      maxAge = person.age;
    }
  }

  return maxAge;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
