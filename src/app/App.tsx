import React, {Suspense} from 'react';
import './styles/index.scss'
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import {classnames} from "shared/lib/classNames/classnames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";


const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classnames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <NavBar />
                <div className={'content-page'}>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
