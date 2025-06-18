import fs from 'fs';
import path from 'path';
import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const pythonQuestions = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'pythonQuestions.json'), 'utf-8')
);
db.once('open', async () => {
  await cleanDB('Question', 'questions');

  await Question.insertMany(pythonQuestions);

  console.log('Questions seeded!');
  process.exit(0);
});
