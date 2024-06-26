import {statement} from "./invoice.ts";
import {readJsonFile} from "./reader.ts";

const invoice = await readJsonFile("invoice.json");
const plays = await readJsonFile("plays.json");

const result = statement(invoice, plays);
console.log(result);