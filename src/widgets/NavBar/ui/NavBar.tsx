import React from 'react';
import {classnames} from "shared/lib/classNames/classnames";
import cls from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classnames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={classnames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={classnames(cls.mainLink)} >About</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
            </div>
        </div>
    );
};
