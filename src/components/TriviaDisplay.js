import React from "react";
import { connect } from "react-redux"
import { TriviaDisplayStyled } from "../styles/TriviaStyled";

export function TriviaDisplay(props){
    const { current, factNumber, showImage, triviaFacts } = props
    
    return(
        <TriviaDisplayStyled>
            <div className="display-header"> 
                <h3>{current} --- Total Fact #: {factNumber}</h3>
            </div>
            <div className="fact-container">
                <ol className="trivia-facts">
                    {triviaFacts.map(fact =>{
                        return(
                            <>
                                <li id={fact.fact_id}>{fact.fact}</li><br/>
                            </>
                        )
                    })}
                </ol>
                <img src={showImage} alt='anime-show' />
            </div>
        </TriviaDisplayStyled>
    )
    
}

export default connect(state=>state) (TriviaDisplay)