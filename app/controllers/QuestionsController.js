import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _getRandomQuestion() {
  let randomQuestion = AppState.questions[Math.floor(Math.random() * AppState.questions.length)]

  // console.log('This is my random question', randomQuestion);
  return randomQuestion

}

function _drawQuestion() {
  let template = ''

  let question = AppState.questions

  const randomQuestion = _getRandomQuestion()

  // question.forEach(q => template += q.QuestionTemplate)

  setHTML('question-template', randomQuestion.QuestionTemplate)
}

export class QuestionsController {
  constructor() {

    this.getQuestions()

    AppState.on('questions', _drawQuestion)
  }



  async getQuestions() {
    try {
      await questionsService.getQuestions()
      Pop.success('We found some questions')
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }

  newQuestion() {
    _getRandomQuestion()
    _drawQuestion()
  }

}

