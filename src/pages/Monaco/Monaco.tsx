import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { useEffect, useRef, useState } from 'react'

import styles from './Monaco.module.css'

export const Monaco = () => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEl = useRef(null)

  useEffect(() => {
    if (monacoEl.current != null && editor == null) {
      setEditor(
        monaco.editor.create(monacoEl.current, {
          value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
            '\n',
          ),
          language: 'typescript',
        }),
      )
    }

    return () => editor?.dispose()
  }, [monacoEl.current])

  return <div className={styles.editor} ref={monacoEl}></div>
}
