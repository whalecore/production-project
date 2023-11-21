import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui'

interface LangSwitcherProps {
  className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps): JSX.Element => {
  const { i18n, t } = useTranslation()

  const toggle = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  )
}

export default LangSwitcher
