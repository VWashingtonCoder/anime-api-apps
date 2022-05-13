import styled from "styled-components"

const ImgGenStyled = styled.div`
    font-family: 'Grape Nuts', cursive;
    color: gold;
    h2 {
        font-size: 50px;
        margin: 20px 0;
    }
    p {
        font-size: 30px;
        margin: 0 47px;
    }
    label {
        font-size: 25px;
    }
    .img-menu {
        margin-top: 15px;
    }
    .img-container {
        margin: 25px;
        font-size: 25px;
    }
    img{
        width: 65%
    }

    @media (max-width: 1000px){
        img{
            width: 75%
        }
    }

    @media (max-width: 500px){
        p {
            font-size: 25px;
            margin: 0 25px;
        }
    }
`

export default ImgGenStyled