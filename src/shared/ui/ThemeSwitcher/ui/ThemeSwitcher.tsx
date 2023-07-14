import { classnames } from 'shared/lib/classNames/classnames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  return (
      <Button
          theme={ThemeButton.CLEAR}
          className={classnames(cls.ThemeSwitcher, {}, [className])}
          onClick={toggleTheme}
      >
          {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
      </Button>
  );
}