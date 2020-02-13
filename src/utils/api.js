import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from './_DATA';

export const fethAvailableData = () => Promise.all([_getQuestions(), _getUsers()]).then((questions, users)=> ({
    users,
    questions
}))

export const getUsers = () => _getUsers()

export const saveQuestion = (question) => _saveQuestion(question)

export const saveQuestionAnswer = (authedUser, qid, answer) => _saveQuestionAnswer({authedUser, qid, answer})
