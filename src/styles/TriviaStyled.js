import styled from 'styled-components'

export const TriviaListStyled = styled.div`
    font-family: 'Courgette', cursive;
    color: aqua;

    h2{
        font-size: 60px;
        margin: 15px 0 0;
    }
    p{
        margin-top: 0px;
        font-size: 28px;
    }
    h3{
        font-size: 25px;
    }
    .anime-list {
        font-size: 18px;
        border: 3px solid;
        padding: 15px 0;
        margin: 0 250px;
        line-height: 35px;
    }
`

export const TriviaDisplayStyled = styled.div`
    line-height: 30px;
    font-size: 20px;
    .fact-container{
        display: flex;
        flex-flow: row-reverse;
        justify-content: center;
    }
    .trivia-facts{
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        width: 45%
    }
    img{
        width: 48%
    }
`