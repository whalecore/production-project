import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui'

import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}

export default PageError
