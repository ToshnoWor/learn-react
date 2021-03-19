import React from 'react';
import s from './preloader.module.css';
import preloader from '../../../assets/images/PreloaderNoBack.svg';

let Preloader = (props) => {
    return <div className={s.PreLoader}>
        <img src={preloader}  alt={"=("}/>
    </div>
}
export default Preloader;