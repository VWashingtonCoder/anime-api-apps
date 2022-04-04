import React from "react";
import { connect } from "react-redux"

export function TriviaDisplay(props){
    const { current, factNumber, showImage, triviaFacts } = props
    console.log(props)
    return(
        <div className="trivia-display">
            <div className="display-header"> 
                <h3>{current}</h3>
                <img src={showImage} alt='anime-image' />
                <p>Total Fact #: {factNumber}</p>
            </div>
            <ol className="trivia-facts">
                {triviaFacts.map(fact =>{
                    console.log(fact)
                    return(
                        <>
                            <li id={fact.fact_id}>{fact.fact}</li>
                        </>
                    )
                })}
            </ol>

        </div>
    )
    
}

export default connect(state=>state) (TriviaDisplay)