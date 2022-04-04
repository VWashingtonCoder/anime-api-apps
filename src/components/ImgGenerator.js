import React, { useState } from 'react';
import * as imgActions from '../state/reducer'
import { connect } from 'react-redux'
import ImgGenStyled from '../styles/ImgGenStyled';

export function ImgGenerator(props) {
    const [category, setCategory] = useState('cuddle')
    const { getNewImg, imageURL } = props
    
    console.log(imageURL)

    const pickCategory = evt => {
        const value = evt.target.value
        setCategory(value)
    }

    const generateImg = evt => {
        evt.preventDefault()
        getNewImg(category)
    }

    return (
        <ImgGenStyled>
            <div className='img-header'>
                <h2>Generate An Image: Otaku Style</h2>
                <p>
                    In our image generator below, you'll find many random anime pics to put a smile on your face.<br/>Just pic a category and get 'animage'
                </p>
            </div>
            
            <div className='img-menu'> 
                <select 
                    name='category' 
                    value={category}
                    onChange={pickCategory}
                >
                    <option value='cuddle'>Cuddle</option>
                    <option value='hug'>Hug</option>
                    <option value='smile'>Smile</option>
                    <option value='highfive'>High-Five</option>
                    <option value='wave'>Wave</option>
                    <option value='dance'>Dance</option>
                    <option value='poke'>Poke</option>
                    <option value='wink'>Wink</option>
                    <option value='happy'>Happy</option>
                    <option value='blush'>Blush</option>
                </select>
                <button onClick={generateImg}>Generate An Image</button>
            </div>

            <div className='img-container'>
                <img src={imageURL} alt='Generate An Image!'/>
            </div>
        </ImgGenStyled>
    )
}

export default connect(state=>state, imgActions) (ImgGenerator)