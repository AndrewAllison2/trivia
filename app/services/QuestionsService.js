import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { triviaApi } from "./AxiosService.js";



class QuestionsService {
  async getQuestions() {
    const response = await triviaApi.get()

    console.log('This is the response', response);

    const arrayOfQuestions = response.data.results.map(questionPojo => new Question(questionPojo))

    // console.log('This is the array of questions', arrayOfQuestions);

    AppState.questions = arrayOfQuestions
  }

}


export const questionsService = new QuestionsService()