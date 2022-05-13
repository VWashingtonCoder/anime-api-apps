import styled from "styled-components"


const QuoteStyled = styled.div`
    font-family: 'Cormorant Garamond', serif;
    color: hotpink;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .quote-header h2{
        font-size: 50px;
        margin: 16.5px 0 -6.5px;
    }
    .quote-header p{
        font-size: 32px;
        margin: 40px 95px;
    }
    .quote{
        font-size: 28px;
        margin: 0 50px 20px;
        border: 5px solid #9092f9;
        padding: 10px;
    }
    .quote-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        font-size: 24px;
        line-height: 34px;
        border: 3px solid #9092f9;
        padding: 8px 15px;
        margin: 0 170px;
    }
    button{
        margin-top: 15px;
        font-size: 15px;
    }

    @media (max-width: 768px){
        .quote-header p{
            margin: 20px 95px 30px;;
        }
    }

    @media (max-width: 500px){
        .quote-header h2{
            font-size: 75px;
            margin: 16.5px 0 0px;
        }
        .quote-header p{
            font-size: 28px;
            margin: 15px 25px 30px;
        }
        .quote-info{
            width: 80%;
        }
        img {
            width: 95%;
        }
    }
`

export default QuoteStyled