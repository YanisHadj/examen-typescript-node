import { readFileSync } from "fs";

function getStatistics():number {
  const persons = JSON.parse(readFileSync("./persons.json").toString());
  return 0
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
