import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { MainPage, routeMain as routeMainPage } from "pages/MainPage";
import { Category, routeMain as routeCategory } from "pages/Category";
import { Search, routeMain as routeSearch } from "pages/Search";
import { About, routeMain as routeAbout } from "pages/About";
import { MovieDetails, routeMain as routeMovieDetails } from "pages/MovieDetails";


import './styles.scss'

export const AppContent = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <main>
                <div className="main-wrapper">
                    <Routes>
                        <Route path={routeMainPage()} element={<MainPage/>}/>
                        <Route path={routeCategory()} element={<Category/>}/>
                        <Route path={routeSearch()} element={<Search/>}/>
                        <Route path={routeAbout()} element={<About/>}/>
                        <Route path={routeMovieDetails()} element={<MovieDetails/>}/>
                        <Route path="*" element={<Navigate to={routeMainPage()}/>}/>
                    </Routes>
                </div>
            </main>
            <Footer/>
        </div>
    )
}