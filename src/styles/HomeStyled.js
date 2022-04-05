import styled from "styled-components"

const StyledHome = styled.div`
    img {
        width: 45%;
    }
    h2 {
        font-size: 45px;
    }
    .header p {
        font-size: 24px;
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
    }
    .info h3 {
        font-size: 45px;
    }
    .info p{
        font-size: 23px;
        margin: -25px 0 25px;
    }
    #imgGen-info h3 {
        font-size: 40px;
        margin-top: 10px;
    }
    #imgGen-info p {
        margin: -20px 0px 35px;
    }
    #trivia-info h3{
        font-size: 50px;
    }
    #trivia-info p{
        font-size: 28px;
        margin: -25px 0 35px;
    }
`

export default StyledHome