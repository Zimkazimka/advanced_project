import React from 'react';
import './styles/index.scss'
import { Link } from "react-router-dom";
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classNames/classnames";
import {AppRouter} from "app/providers/router";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <AppRouter />
        </div>
    );
};

export default App;
