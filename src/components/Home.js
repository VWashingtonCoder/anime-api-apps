import React from "react";
import { useNavigate } from "react-router-dom";
import StyledHome from "../styles/HomeStyled";
import quotesPrev from "../images/ani-quotes-preview.jpg";
import imgGenPrev from "../images/ani-img-gen-preview.jpg"
import triviaPrev from "../images/ani-trivia-preview.jpg"

export default function Home(){
    const navigate = useNavigate()
    
    const compRouter = (evt) => {
        const appName = evt.target.className
        switch(appName) {
            case "quotes-app":
                navigate("/quotes")
                break;
            case "imgGen-app":
                navigate("/img-generator")
                break;
            case "trivia-app":
                navigate("/trivia")
                break;
            default:
                return appName
        }
    }

    return(
        <StyledHome>
            <div className="header">
                <h2>
                    Welcome To My Anime Inspired Website
                </h2>
                <p>
                    Come enjoy a few cool apps for anime fans!
                </p>
            </div>
            <div 
                className="comp-container" id="quotes"
            >
                <img 
                    src={quotesPrev} 
                    alt="quotes-preview"
                />
                <div className="info" id="quotes-info">
                    <h3>Anime Quotes</h3>
                    <p>
                        Every now and then, we could all use a motivational boost. Get that perfect anime based quote to pull out whenever you need a great pick me up!
                    </p>
                    <button 
                        className="quotes-app" 
                        onClick={compRouter}
                    >
                        Go To App
                    </button>
                </div>
            </div>
            
            <div 
                className="comp-container" id="imgGen"
            >
                <img 
                    src={imgGenPrev} alt="img-gen-preview"
                />
                <div className="info" id="imgGen-info">
                    <h3>
                        Generate An Image: Otaku Style
                    </h3>
                    <p>
                        In our image generator below, you'll find many random anime pics to put a smile on your face. Just pic a category and get 'animage'!
                    </p>
                    <button 
                        className="imgGen-app" 
                        onClick={compRouter}
                    >
                        Go To App
                    </button>
                </div>
            </div>

            <div 
                className="comp-container" id="trivia"
            >
                <img 
                    src={triviaPrev} alt="trivia-preview"
                />
                <div className="info" id="trivia-info">
                    <h3>Anime Trivia</h3>
                    <p>
                        Think you know all there is to know about your favorite series? Come discover some cool trivia facts and see if you really know it all!
                    </p>
                    <button 
                        className="trivia-app" 
                        onClick={compRouter}
                    >
                        Go To App
                    </button>
                </div>
            </div>
        </StyledHome>
    )
}