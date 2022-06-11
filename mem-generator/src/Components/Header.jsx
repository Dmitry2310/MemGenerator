import React from 'react';
import logo from './../images/TrollFace.png';
import style from './Header.module.css';


export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>
                <img src={logo} className={style.headerImg}/>
                <h2 className={style.headerTitle}>Meme Generator</h2>
            </div>
            <div className={style.headerText}>Some React Progect</div>
        </header>
    )
}