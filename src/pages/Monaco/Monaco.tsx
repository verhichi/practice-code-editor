import Editor, { useMonaco } from '@monaco-editor/react'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import {
  MONACO_EDITOR_LANGUAGE_LIST,
  MONACO_EDITOR_LANGUAGES,
  MONACO_EDITOR_THEME_LIST,
  MONACO_EDITOR_THEMES,
  useForm,
} from '.'

export const Monaco = () => {
  const monaco = useMonaco()
  const { handleSubmitForm, options } = useForm()

  const handleChangeEditor = (value: string | undefined) => {
    console.log({ value })
  }

  return (
    <>
      <form onSubmit={handleSubmitForm} className="p-2 grid gap-3">
        <FormControl fullWidth>
          <InputLabel id="monaco-theme">Theme</InputLabel>
          <Select
            labelId="monaco-theme"
            id="monaco-theme-select"
            label="Theme"
            defaultValue={MONACO_EDITOR_THEMES.VSDARK}
            name="theme"
          >
            {MONACO_EDITOR_THEME_LIST.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="monaco-language">Language</InputLabel>
          <Select
            labelId="monaco-language"
            id="monaco-language-select"
            label="Language"
            defaultValue={MONACO_EDITOR_LANGUAGES.TYPESCRIPT}
            name="language"
          >
            {MONACO_EDITOR_LANGUAGE_LIST.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Apply Settings
        </Button>
      </form>
      <Editor
        height="90vh"
        defaultValue=""
        defaultLanguage={MONACO_EDITOR_LANGUAGES.TYPESCRIPT}
        onChange={handleChangeEditor}
        {...options}
      />
    </>
  )
}
