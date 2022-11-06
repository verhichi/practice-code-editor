import { FormEvent, useState } from 'react'

import {
  MONACO_EDITOR_LANGUAGES,
  MONACO_EDITOR_THEMES,
  tUsePropsReturn,
} from '../..'

export const useForm = (): tUsePropsReturn => {
  const [options, setOptions] = useState<tUsePropsReturn['options']>({
    language: MONACO_EDITOR_LANGUAGES.TYPESCRIPT,
    theme: MONACO_EDITOR_THEMES.VSDARK,
    minimap: {
      enabled: true,
    },
  })

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOptions({
      ...options,
      language: e.target.language.value,
      theme: e.target.theme.value,
    })
  }

  return { handleSubmitForm, options }
}
