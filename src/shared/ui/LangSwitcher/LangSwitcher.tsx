import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

const LangSwitcher = ({ className, short }: LangSwitcherProps): JSX.Element => {
  const { i18n, t } = useTranslation()

  const toggle = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'Которкий язык' : 'Язык')}
    </Button>
  )
}

export default LangSwitcher
