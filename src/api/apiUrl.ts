const API = process.env.NODE_ENV==="production" ? "https://bft-interview-api.herokuapp.com/api" : "http://localhost:8000/api"

const AUTH = `${API}/auth/`
const COURSES = `${API}/courses/`
const QUESTIONS = `${API}/questions/`
const RESULTS = `${API}/results/`
const USERCOURSES = `${API}/userCourses/`
export const LOGIN = `${AUTH}/login`
export const REGISTER = `${AUTH}/register`
export const GETCOURSES = `${COURSES}/`
export const ADDUSERCOURSE = `${USERCOURSES}/`
export const GETUSERCOURSE = `${USERCOURSES}/`