import React from "react";
import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeCategory } from "pages/Category";
import { routeMain as routeSearch } from "pages/Search";
import { routeMain as routeAbout } from "pages/About";
import logo from 'assets/images/Logo.svg';

import './styles.scss'

export const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div>
                    <NavLink 
                        to={routeMainPage()}
                        className={({ isActive }) => isActive ? 'linkActive' : 'inactive'}
                        >
                        <img src={logo} alt={logo}/>
                    </NavLink>
                </div>
                <nav>
                    <NavLink 
                        to={routeMainPage()}
                        className={({ isActive }) => isActive ? 'linkActive' : 'inactive'}
                        >
                        <span className="main-link-name">Главная</span>
                    </NavLink>
                    <NavLink 
                        to={routeCategory()}
                        className={({ isActive }) => isActive ? 'linkActive' : 'inactive'}
                        >
                        <span>Фильмы по категории</span>
                    </NavLink>
                    <NavLink 
                        to={routeAbout()}
                        className={({ isActive }) => isActive ? 'linkActive' : 'inactive'}
                        >
                        <span>О нас</span>
                    </NavLink>
                    <NavLink 
                        to={routeSearch()}
                        className={({ isActive }) => isActive ? 'linkActive' : 'inactive'}
                        >
                        <span>Поиск</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}