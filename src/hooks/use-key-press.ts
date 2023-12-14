import { useEffect, useState } from "react"
import { KEYBOARD_KEYS } from "../lib/constants"


export const useKeyPress = () => {

  const [keyboardKeyPress, setKeyboardKeyPress] = useState<string | null>(null)

  // keyboard keys press
  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {

      const keyValue = KEYBOARD_KEYS[e.key]

      if (keyValue != null) {
        e.preventDefault()
        setKeyboardKeyPress(keyValue)
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (keyboardKeyPress != null) {
        setKeyboardKeyPress(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }

  }, [keyboardKeyPress, setKeyboardKeyPress])

  return { keyboardKeyPress }

}