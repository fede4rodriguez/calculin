import { useCallback, useState } from "react"
import { type KeyboardValues, COMMANDS, OPERATORS } from "../lib/constants"
import { type ICalc, useHistory } from "./use-history"
import { set } from "astro/zod"

interface Result {
  value: string | null
  error: string
}

export const useCalc = () => {

  const [display, setDisplay] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [currentCalc, setCurrentCalc] = useState<ICalc | null>(null)
  const { addCalc, clearHistory } = useHistory()

  const pressKey = useCallback((keyValue: KeyboardValues) => {

    if(keyValue === COMMANDS['delete']) {
      setDisplay('')
      setResult('')
      // NEW CALC
      clearHistory()
      setCurrentCalc(null)
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
        // NEW STEP
        setCurrentCalc({
          initialValue: parseFloat(result)
        })
        setDisplay(result + keyValue)
        setResult('')        
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
        const items: ICalc['items'] = display.split(/(\+|-|\*|\/)/).map((item) => {
          const operator = item.trim()
          if(operator === '') return
          if(isNaN(parseFloat(operator))) return
          return {
            value: parseFloat(operator),
            operator: operator
          }
        })
        setCurrentCalc((prev) => {
          const newItem = { ...prev, items, result }
          addCalc(newItem)
          return newItem
        })
        
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