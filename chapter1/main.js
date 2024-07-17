import {htmlStatement, statement} from "./invoice.js";
import {readJsonFile} from "./reader.js";

const invoice = await readJsonFile("invoice.json");
const plays = await readJsonFile("plays.json");

const result = statement(invoice, plays);
console.log(result);

// const htmlResult = htmlStatement(invoice, plays);
// console.log(htmlResult);
