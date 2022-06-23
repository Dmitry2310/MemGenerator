import React, { useEffect, useState } from 'react';
import style from './Meme.module.css';

export const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1bij.jpg'
    });

    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.impflip.com/get_memes', { mode: 'no-cors' });
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, [])

    const [allMemes, setAllMemes] = useState([]);

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })
        )
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        })
        )
    }

    return (
        <main>
            <div className={style.form}>
                <input type='text' className={style.formInput} name='topText' value={meme.topText} onChange={handleChange} placeholder='top text' />
                <input type='text' className={style.formInput} name='bottomText' value={meme.bottomText} onChange={handleChange} placeholder='bottom text' />
                <button className={style.formButton} onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className={style.meme}>
                <img src={meme.randomImage} className={style.memeImage} />
                <h2 className={style.memeTextTop}>{meme.topText}</h2>
                <h2 className={style.memeTextBottom}>{meme.bottomText}</h2>
            </div>
        </main>
    )
}