import styled from 'styled-components'

export const TriviaListStyled = styled.div`
    font-family: 'Courgette', cursive;
    color: aqua;
    width: 90%;
    display: flex;
    flex-flow: column;
    align-items: center;

    h2{
        font-size: 60px;
        margin: 15px 0 0;
    }
    p{
        font-size: 36px;
        margin: 25px;
    }
    h3{
        font-size: 36px;
    }
    .anime-list {
        display: flex;
        justify-content: space-evenly;
        font-size: 18px;
        border: 3px solid;
        padding: 15px;
        margin: 20px;
        line-height: 35px;
    }
    button {
        font-size: 20px;
    }
    .anime-series {
        border: 1px solid aliceblue;
        padding: 10px;
    } 
    
    @media (max-width: 1000px){
        width: 97%;
        .anime-list{
            display: flex;
            flex-flow: column;
        }
        p{
            font-size: 28px;
            margin: 10px 0 25px;
        }
    }

    @media (max-width: 500px){
        .trivia-header{
            padding: 0px 40px 0 60px;
        }
        button{
            margin-left: 15px;
        }
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
    .top-btn{
        margin-bottom: 30px;
    }
    @media (max-width: 1000px){
        .fact-container{
            flex-flow: column-reverse;
            align-items: center;
        }
        .trivia-facts{
            display: flex;
            flex-flow: column;
            justify-content: space-evenly;
            width: 85%
        }
    }

    @media (max-width: 500px){
        h3{
            font-size: 32px;
        }
    }
`