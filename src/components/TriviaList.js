import React, { useState } from 'react';
import { getTrivia } from '../state/reducer';
import { connect } from 'react-redux'
import TriviaDisplay from './TriviaDisplay';

const animelist = [
    { 
        id: 1, 
        name: 'Attack On Titan', 
        urlKey: 'attack_on_titan' 
    },
    { 
        id: 2, 
        name: 'Black Clover', 
        urlKey: 'black_clover' 
    },
    { 
        id: 3, 
        name: 'Bleach', 
        urlKey: 'bleach' 
    },
    { 
        id: 4, 
        name: 'Demon Slayer', 
        urlKey: '' 
    },
    { 
        id: 5, 
        name: 'Dragon Ball', 
        urlKey: 'dragon_ball' 
    },
    { 
        id: 6, 
        name: 'Full Metal Alchemist Brotherhood', 
        urlKey: 'fma_brotherhood' 
    },
    { 
        id: 7, 
        name: 'Gintama', 
        urlKey: 'gintama' 
    },
    { 
        id: 8, 
        name: 'Hunter X Hunter', 
        urlKey: 'hunter_x_hunter' 
    },
    { 
        id: 9, 
        name: 'Jujutsu Kaisen', 
        urlKey: 'jujutsu_kaisen' 
    },
    { 
        id: 10, 
        name: 'My Hero Academia', 
        urlKey: 'boku_no_hero_academia' 
    },
    { 
        id: 11, 
        name: 'Naruto', 
        urlKey: 'naruto' 
    },
    { 
        id: 12, 
        name: 'One Piece', 
        urlKey: 'one_piece' 
    },
]

export function TriviaList(props) {
    const { getTrivia, factNumber } = props
    const [currentAnime, setCurrAnime] = useState('')

    const selectShow = evt => {
        const urlKey = evt.target.id
        const title = evt.target.innerText
        getTrivia(urlKey)
        setCurrAnime(title)
    }

    return (
        <div className='trivia-list'>
            <div className='trivia-header'>
                <h2>Anime Trivia</h2>
                <p>
                    Come discover some cool trivia facts abiut some of your favorite shows! 
                </p>
            </div>
            <div className='anime-list'>
                {animelist.map(anime => {
                    return(
                        <>
                            <div 
                                key={anime.id}
                                id={anime.urlKey}
                                onClick={selectShow}
                            >
                                {anime.name}
                            </div>
                        </>
                    )
                })}
            </div>
            {factNumber === 0 
                ? <h3>Pick A Anime To See Some Awesome Trivia</h3>
                : <TriviaDisplay current={currentAnime}/>
            }
        </div>
    )
}

export default connect(state=>state, { getTrivia }) (TriviaList)