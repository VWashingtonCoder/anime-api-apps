import styled from "styled-components"

const StyledHome = styled.div`
    img {
        width: 45%;
    }
    h2 {
        font-size: 80px;
        margin-bottom: 30px;
    }
    .header p {
        font-size: 40px;
        margin: 0px 72px;
    }
    .comp-container {
        display: flex;
        justify-content: space-evenly;
        border: 3px solid;
        margin: 25px 30px;
        padding: 25px 0;
        background-color: black;
    }
    .info {
        width: 45%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .info h3 {
        font-size: 75px;
        margin: 0px
    }
    .info p{
        font-size: 45px;
        margin: -35px 0 25px;
    }
    #imgGen-info h3 {
        font-size: 60px;
        margin-top: 10px;
    }
    #imgGen-info p {
        font-size: 40px;
        margin: -20px 0px 35px;
    }
    #trivia-info h3{
        font-size: 85px;
    }
    #trivia-info p{
        font-size: 45px;
        margin: -25px 0 35px;
    }
    button {
        font-size: 25px;
    }
    

    @media (max-width: 1000px) {
        h2 {
            font-size: 55px;
        }
        button{
            font-size: 20px;
        }
        .info h3 {
            font-size: 65px;
        }
        .info p{
            font-size: 25px;
        }
        #imgGen-info h3 {
            font-size: 50px;
        }
        #imgGen-info p {
            font-size: 30px;
            margin: 25px 0px;
        }
        #trivia-info h3{
            font-size: 65px;
        }
        #trivia-info p{
            font-size: 30px;
            margin: 25px 0;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 43px;
        }
        .header p {
            font-size: 32px;
        }
        .info h3 {
            font-size: 50px;
            padding-bottom: 25px
        }
        #imgGen-info h3 {
            font-size: 39px;
            padding-bottom: 0px;
        }
        #imgGen-info p {
            font-size: 28px;
        }
        #trivia-info h3{
            font-size: 55px;
            padding-bottom: 0px;
        }
        #trivia-info p{
            font-size: 25px;
            margin: 0 0 25px;
        }
    }

    @media (max-width: 500px) {
        .header {
            display: flex;
            flex-flow: column;
            align-items: center;
        }
        h2 {
            font-size: 40px;
        }
        .header p {
            font-size: 30px;
            width: 80%;
        }
        .comp-container {
            display: flex;
            flex-flow: column-reverse;
            align-items: center;
        }
        img {
            width: 90%;
        }
        button{
            margin-bottom: 15px;
        }
        .info {
            width: 90%;
        }
        .info h3 {
            padding-bottom: 45px;
        }
        #imgGen-info h3 {
            font-size: 37px;
        }   
`

export default StyledHome