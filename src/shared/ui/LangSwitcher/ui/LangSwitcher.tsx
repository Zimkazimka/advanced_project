import { classnames } from 'shared/lib/classNames/classnames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
      <Button
          className={classnames('', {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={toggleLang}
      >
          {t('Язык')}
      </Button>
  );
}
