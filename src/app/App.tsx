import React, { Suspense } from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classNames/classnames";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<h2>Loading page...</h2>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
