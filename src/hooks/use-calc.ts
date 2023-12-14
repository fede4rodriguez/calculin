import { useCallback, useState } from "react"
import { type KeyboardValues, COMMANDS, OPERATORS } from "../lib/constants"


export const useCalc = () => {

  const [display, setDisplay] = useState<string>('')
  const [result, setResult] = useState<string>('')

  const pressKey = useCallback((keyValue: KeyboardValues) => {

    if(keyValue === COMMANDS['delete']) {
      setDisplay('')
      setResult('')
      // NEW CALC
      return
    }

    if(result !== '') {

      if(
        keyValue === COMMANDS['equal'] ||
        keyValue === COMMANDS['backspace']        
      ) {
        return;
      }

      // operators
      if(
        keyValue === OPERATORS['+'] ||
        keyValue === OPERATORS['-'] ||
        keyValue === OPERATORS['*'] ||
        keyValue === OPERATORS['/']
      ) {
        setDisplay(result + keyValue)
        setResult('')
        // NEW STEP
        return
      }

      
      // NEW CALC
      
      
      // point
      if(keyValue === '.') {
        setResult('')
        setDisplay('0.')
        return
      } 
      
      // numbers
      setResult('')
      setDisplay(keyValue)  
      return
    } 

    // backspace
    if(keyValue === COMMANDS['backspace']) {
      setDisplay(display.slice(0, -1))
      return
    }

    // equal
    if(keyValue === COMMANDS['equal']) {
      setResult(eval(display))
      return
    }

    // operators
    if(
      keyValue === OPERATORS['+'] ||
      keyValue === OPERATORS['-'] ||
      keyValue === OPERATORS['*'] ||
      keyValue === OPERATORS['/']
    ) {
      setDisplay(display + keyValue)
      return
    }

    // point
    if(keyValue === '.') {
      const lastChar = display.slice(-1)
      
      if(lastChar === '') {
        setDisplay('0.')
        return
      }

      const isNumber = !isNaN(parseInt(lastChar))
      if(!isNumber) return
    }

    // numbers
    setDisplay(display + keyValue)
    
  }, [result, display])  

  return { display, result, pressKey }

}