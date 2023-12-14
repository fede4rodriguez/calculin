import { useEffect, useState } from "react"
import { useKeyPress } from "../hooks/use-key-press"
import { useCalc } from "../hooks/use-calc"
import { clsx } from 'clsx'
import { COMMANDS, OPERATORS } from "../lib/constants"

export function Calc() {
  const { display, result, pressKey }= useCalc()
  const { keyboardKeyPress } = useKeyPress()  
  

  useEffect(() => {
    if(keyboardKeyPress == null) return
    pressKey(keyboardKeyPress)
  }, [keyboardKeyPress])

  return (
    <article 
      id='calc'
      className="rounded-3xl overflow-hidden shadow-black shadow-2xl"
    >
      <header className="bg-gray-800 p-7 flex">
        <div className="w-72 rounded-lg bg-cyan-300/50 flex-1 flex flex-col justify-between py-1 px-2 text-end text-black/80">
          <span className="text-sm h-4">{display ?? ' '}</span>
          <h4 className=" text-5xl">{ result !== '' ? result : '0'}</h4>
          <span className="text-xs">historial</span>
        </div>
      </header>
      <nav className="bg-gray-700 px-7 py-3 grid gap-3 grid-cols-5 items-center">
        <button className='col-span-2 bg-gray-600/60 rounded-lg px-3 py-1 text-white/60 text-xs font-medium'>detalle</button>
        <div className=" rounded-full aspect-square bg-cyan-300/30 grid content-center justify-center text-white/80 font-bold">@</div>
        <button className='col-span-2 bg-gray-600/60 rounded-lg px-3 py-1 text-white/60 text-xs font-medium'>historial</button>
      </nav>
      <section className="bg-gray-700 p-7 pt-0 grid gap-2 grid-rows-5 grid-cols-4">
        <button 
          onClick={() => pressKey(COMMANDS.delete)}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === 'delete',
              'bg-gray-600': keyboardKeyPress !== 'delete'
            }
          )}
        >AC</button>

        <button
          onClick={() => pressKey(COMMANDS.backspace)}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === 'backspace',
              'bg-gray-600': keyboardKeyPress !== 'backspace'
            }
          )}
        >C</button>

        <button 
          onClick={() => pressKey(OPERATORS["/"])}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '/',
              'bg-gray-600': keyboardKeyPress !== '/'
            }
          )}
        >
          /
        </button>

        <button 
          onClick={() => pressKey(OPERATORS["*"])}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '*',
              'bg-gray-600': keyboardKeyPress !== '*'
            }
          )}
        >
          x
        </button>

        <button 
          onClick={() => pressKey('7')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '7',
              'bg-gray-600': keyboardKeyPress !== '7'
            }
          )}
        >
          7
        </button>

        <button 
          onClick={() => pressKey('8')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '8',
              'bg-gray-600': keyboardKeyPress !== '8'
            }
          )}
        >
          8
        </button>

        <button 
          onClick={() => pressKey('9')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '9',
              'bg-gray-600': keyboardKeyPress !== '9'
            }
          )}
        >
          9
        </button>

        <button 
          onClick={() => pressKey(OPERATORS["-"])}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '-',
              'bg-gray-600': keyboardKeyPress !== '-'
            }
          )}
        >
          -
        </button>

        <button 
          onClick={() => pressKey('4')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '4',
              'bg-gray-600': keyboardKeyPress !== '4'
            }
          )}
        >
          4
        </button>

        <button 
          onClick={() => pressKey('5')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '5',
              'bg-gray-600': keyboardKeyPress !== '5'
            }
          )}
        >
          5
        </button>

        <button 
          onClick={() => pressKey('6')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '6',
              'bg-gray-600': keyboardKeyPress !== '6'
            }
          )}
        >
          6
        </button>

        <button 
          onClick={() => pressKey(OPERATORS["+"])}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '+',
              'bg-gray-600': keyboardKeyPress !== '+'
            }
          )}
        >
          +
        </button>
        
        <button 
          onClick={() => pressKey('1')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '1',
              'bg-gray-600': keyboardKeyPress !== '1'
            }
          )}
        >
          1
        </button>

        <button 
          onClick={() => pressKey('2')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '2',
              'bg-gray-600': keyboardKeyPress !== '2'
            }
          )}
        >
          2
        </button>

        <button 
          onClick={() => pressKey('3')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '3',
              'bg-gray-600': keyboardKeyPress !== '3'
            }
          )}
        >
          3
        </button>

        <button 
          onClick={() => pressKey(COMMANDS["equal"])}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            'row-span-2',
            {
              'bg-cyan-400/30': keyboardKeyPress === 'equal',
              'bg-gray-600': keyboardKeyPress !== 'equal'
            }
          )}
        >
          =
        </button>
        
        <button 
          onClick={() => pressKey('0')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            'col-span-2',
            {
              'bg-cyan-400/30': keyboardKeyPress === '0',
              'bg-gray-600': keyboardKeyPress !== '0'
            }
          )}
        >
          0
        </button>

        <button 
          onClick={() => pressKey('.')}
          className={clsx(
            'active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold',
            {
              'bg-cyan-400/30': keyboardKeyPress === '.',
              'bg-gray-600': keyboardKeyPress !== '.'
            }
          )}
        >
          .
        </button>

      </section>
    </article>
  )
}