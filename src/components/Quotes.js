import React, { useEffect } from "react";
import QuoteStyled from "../styles/QuoteStyled";
import * as quotesActions from '../state/reducer'
import { connect } from "react-redux";
import dragonKatana from "../images/dragonKatana.png"


export function Quotes(props) {
    const { animeQuotes, getNewAnimeQuote } = props

    useEffect(() => {
        getNewAnimeQuote()
    }, [])

    const newQuote = evt => {
        evt.preventDefault()
        getNewAnimeQuote()
    }

    return (
        <QuoteStyled>
            <div className="quote-header"> 
                <h2>Anime Quotes</h2>
                <p>
                    Every now and then , we could all use a motivational boost. Get that perfect anime based quote to pull out whenever you need a great pick me up!
                </p>
            </div>

            <div className="quote">
                {animeQuotes.quote}
            </div>

            <div className="quote-info">
                <div className="anime">Anime: {animeQuotes.anime} </div>
                <div className="character">Character: {animeQuotes.character}</div>
                <button onClick={newQuote}>Get New Quote</button>
            </div>

            <img src={dragonKatana} alt='dragon katana girl' />
        </QuoteStyled>
    )
}

export default connect(state=>state, quotesActions) (Quotes)