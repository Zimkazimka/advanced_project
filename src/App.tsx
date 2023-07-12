import React, { Suspense } from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import './styles/index.scss'
import { useTheme } from "./theme/useTheme";
import {classnames} from "./helpers/classNames/classnames";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<h2>Loading page...</h2>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
