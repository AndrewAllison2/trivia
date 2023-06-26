export class Question {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers

  }
  get QuestionTemplate() {
    return `
    <div class="row py-5">
      <div class="col-10 m-auto">
        <p class="text-light mb-2">${this.category}</p>
        <div class="card">
          <div class="card-body">
            ${this.question}
          </div>
        </div>
      </div>
    </div>

    <div class="row py-5">
    <div class="col-10 m-auto">
      <div class="row m-auto">
        <div class="col-6">
          <div class="card mt-3">
            <div class="card-body">
              <span>${this.correctAnswer}</span>
            </div>
          </div>
          <div class="card mt-3">
            <div class="card-body">
            <span>${this.incorrectAnswers}</span>
            </div>
          </div>
        </div>
    `
  }
}

