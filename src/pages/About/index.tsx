import React from "react";

import { routeMain } from "./routes";
import aboutImg from 'assets/images/emma.png';

import './styles.scss'

export const About = () => {
    return (
        <section className="about-wrapper">
            <div>
                <img src={aboutImg} alt=""/>
            </div>
            <div>
                <h2>MOVIESinfo</h2>
                <p>Мы - один из крупнейших информационных сервисов про кино, сериалы и шоу! Здесь вы сможете найти информацию по эпизодам, описания персонажей, трейлеры, актёрский состав и рейтинг!</p>
            </div>
        </section>
    )
}

export { routeMain };