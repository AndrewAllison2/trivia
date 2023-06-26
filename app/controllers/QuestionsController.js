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

  async getAnimalsQuestions() {
    try {
      await questionsService.getAnimalsQuestions()
      Pop.success('Animal questions coming at you!')
    } catch (error) {
      Pop.error(error)
    }
  }

  async getGeneralQuestions() {
    try {
      await questionsService.getGeneralQuestions()
      Pop.success('Do you know much about anything?')
    } catch (error) {
      Pop.error(error)
    }
  }

  async getMovieQuestions() {
    try {
      await questionsService.getMovieQuestions()
      Pop.success('Tom Cruise for 500 Alex?')
    } catch (error) {
      Pop.error(error)
    }
  }

  async getHistoryQuestions() {
    try {
      await questionsService.getHistoryQuestions()
      Pop.success('It was a while ago probably.')
    } catch (error) {
      Pop.error(error)
    }
  }

  newQuestion() {
    _getRandomQuestion()
    _drawQuestion()
  }

}

