import React, { useEffect, useState } from 'react';
import style from './Meme.module.css';
import memesData from './memesData';

export const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    useEffect(() => {
        // i have an isseu with server request
       /*  async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes", { mode: 'no-cors' });
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes(); */
    }, [])

    const [allMemes, setAllMemes] = useState(memesData.data.memes);

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