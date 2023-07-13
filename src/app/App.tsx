import React from 'react';
import './styles/index.scss'
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classNames/classnames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";

const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <NavBar />
            <AppRouter />
        </div>
    );
};

export default App;
