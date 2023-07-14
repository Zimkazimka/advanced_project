import { classnames } from 'shared/lib/classNames/classnames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
      <div className={classnames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
          <Button onClick={onToggle}>toglgle</Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  );
}
