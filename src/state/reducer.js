import axios from "axios";
// action type(s)
const GET_NEW_ANIME_QUOTE = 'GET_NEW_ANIME-QUOTE'
const GET_NEW_IMG = 'GET_NEW_IMG'
const GET_TRIVIA = 'GET_TRIVIA'

// action-creator(s)
export const getNewAnimeQuote = () => dispatch => {
    axios.get('https://animechan.vercel.app/api/random')
        .then(res => {
            dispatch({ type: GET_NEW_ANIME_QUOTE, payload: res.data })
        })
        .catch(err => {
            alert(err.response.data.message)
        })
} 

export const getNewImg = type => dispatch => {
    axios.get(`https://api.waifu.pics/sfw/${type}`)
        .then(res => { 
            dispatch({ type: GET_NEW_IMG, payload: res.data.url })
        })
        .catch(err => {
            alert(err.response.data.message)
        })
}
export const getTrivia = urlKey => dispatch => {
    axios.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${urlKey}`)
        .then(res => {
            dispatch({ type: GET_TRIVIA, payload: res.data })
        })
        .catch(err => {
            console.log(err.response.data.data)
            alert('Having Technical Glitches...Come Back Later.')
        })
}
// reducer
const intialState = {
    animeQuotes: {},
    imageURL: '',
    triviaFacts: [],
    showImage: '',
    factNumber: 0
}
const reducer = (state=intialState, action) => {
    switch(action.type) {
        case GET_NEW_ANIME_QUOTE:
            return ({
                animeQuotes: action.payload
            })
        case GET_NEW_IMG:
            return ({
                imageURL: action.payload
            })
        case GET_TRIVIA:
            return ({
                triviaFacts: action.payload.data,
                showImage: action.payload.img,
                factNumber: action.payload.total_facts
            })
        default:
            return state
    }
}

export default reducer