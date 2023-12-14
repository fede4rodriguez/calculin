import { useCallback, useState } from "react"


export const useCalc = () => {

  const [display, setDisplay] = useState<string>('')
  const [result, setResult] = useState<string>('')

  const pressKey = useCallback((key: string) => {
    if(key === 'Backspace') {
      setDisplay(display.slice(0, -1))
      return
    }
    if(key === '=') {
        setResult(eval(display))
      return
    }
      if(key === 'Delete') {
        setDisplay('')
      return
    }
    if(result !== '') {

      const isNumber = !isNaN(Number(key))

      setDisplay(isNumber ? key: result+key)
      setResult('')
      return
    }
    setDisplay(display + key)
  }, [result, display])  

  return { display, result, pressKey }

}