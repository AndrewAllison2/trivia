import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { triviaApi } from "./AxiosService.js";



class QuestionsService {
  async getMovieQuestions() {
    const response = await triviaApi.get('&category=11&type=boolean')
    const arrayOfMovieQuestions = response.data.results.map(q => new Question(q))
    AppState.questions = arrayOfMovieQuestions
  }
  async getGeneralQuestions() {
    const response = await triviaApi.get('&category=9&type=boolean')
    const arrayOfGeneralQuestions = response.data.results.map(questionPojo => new Question(questionPojo))
    AppState.questions = arrayOfGeneralQuestions
  }
  async getAnimalsQuestions() {
    const response = await triviaApi.get('&category=27&type=boolean')
    console.log(response);

    const arrayOfAnimalQuestions = response.data.results.map(questionPojo => new Question(questionPojo))
    AppState.questions = arrayOfAnimalQuestions
  }
  async getQuestions() {
    const response = await triviaApi.get()

    console.log('This is the response', response);

    const arrayOfQuestions = response.data.results.map(questionPojo => new Question(questionPojo))

    // console.log('This is the array of questions', arrayOfQuestions);

    AppState.questions = arrayOfQuestions
  }

}


export const questionsService = new QuestionsService()