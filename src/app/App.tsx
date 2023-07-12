import React from 'react';
import './styles/index.scss'
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classNames/classnames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <NavBar />
            <AppRouter />
        </div>
    );
};

export default App;
