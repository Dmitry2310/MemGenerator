import React from 'react';
import style from './Meme.module.css';

export const Meme = () => {
    return (
        <main>
            <form className={style.form}>
                <input type='text' className={style.formInput} placeholder='top text'/>
                <input type='text' className={style.formInput} placeholder='bottom text'/>
                <button className={style.formButton}>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}