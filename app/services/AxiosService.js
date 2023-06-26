// @ts-ignore
export const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=15&type=boolean',
  timeout: 8000
})