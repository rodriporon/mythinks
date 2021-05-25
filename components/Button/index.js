import styles from "../../styles/Button.module.css"

import * as React from "react"

export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button disabled={disabled} className={styles.button} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
