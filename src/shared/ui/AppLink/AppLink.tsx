import { classnames } from 'shared/lib/classNames/classnames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    className,
    ...etc
  } = props;
  return (
      <Link
          to={to}
          className={classnames(cls.AppLink, {}, [className, cls[theme]])}
          {...etc}
      >
          {children}
      </Link>
  );
};
