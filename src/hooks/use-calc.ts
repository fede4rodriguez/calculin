import { useCallback, useState } from "react"
import { type KeyboardValues, COMMANDS, OPERATORS } from "../lib/constants"

interface Result {
  value: string | null
  error: string
}

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


    if(display === '') {
      if(
        keyValue === COMMANDS['equal'] ||         
        keyValue === COMMANDS['backspace'] ||
        keyValue === OPERATORS['+'] ||
        keyValue === OPERATORS['-'] ||
        keyValue === OPERATORS['*'] ||
        keyValue === OPERATORS['/']
      ) {
        return
      }

      if(keyValue === '.') {
        setDisplay('0.')
        return
      }
    }

    // backspace
    if(keyValue === COMMANDS['backspace']) {
      setDisplay(display.slice(0, -1))
      return
    }

    // equal
    if(keyValue === COMMANDS['equal']) {
      try {
        const result = eval(display)
        setResult(result)
      } catch (error) {
        console.error(error)
      }
      return
    }

    // operators, point
    if(     
      keyValue === OPERATORS['+'] ||
      keyValue === OPERATORS['-'] ||
      keyValue === OPERATORS['*'] ||
      keyValue === OPERATORS['/'] ||
      keyValue === '.'
    ) {  
      
      const lastChar = display.slice(-1)
      const lastCharIsNumber = !isNaN(parseInt(lastChar))
      if(lastCharIsNumber) setDisplay(display + keyValue)
      return
    }

    // numbers
    setDisplay(display + keyValue)
    
  }, [result, display])  

  return { display, result, pressKey }

}