import {classnames} from "shared/lib/classNames/classnames";
import cls from './SideBar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SideBarProps {
    className?: string;
}

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classnames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toglgle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/*LangSwitcher*/}
            </div>
        </div>
    );
};
