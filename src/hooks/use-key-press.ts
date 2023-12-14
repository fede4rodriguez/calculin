import { useEffect, useState } from "react"

const KEYBOARD_KEYS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+',
  '-',
  '*',
  '/',
  '=',
  'Enter',
  'Backspace',
  '.',
]

export const useKeyPress = () => {

  const [keyboardKeyPress, setKeyboardKeyPress] = useState<string | null>(null)

  // keyboard keys press
  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {
      if (KEYBOARD_KEYS.includes(e.key)) {
        e.preventDefault()
        setKeyboardKeyPress(e.key)
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