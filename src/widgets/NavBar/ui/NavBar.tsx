import React from 'react';
import { classnames } from 'shared/lib/classNames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();

  return (
      <div className={classnames(cls.Navbar, {}, [className])}>
          <div className={classnames(cls.links)}>
              <AppLink
                  theme={AppLinkTheme.SECONDARY}
                  to="/about"
                  className={classnames(cls.mainLink)}
              >
                  {t('О сайте')}
              </AppLink>
              <AppLink
                  theme={AppLinkTheme.SECONDARY}
                  to="/"
              >
                  {t('Главная')}
              </AppLink>
          </div>
      </div>
  );
}
