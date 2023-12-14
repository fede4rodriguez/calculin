import { useEffect, useState } from "react"
import { useKeyPress } from "../hooks/use-key-press"
import { useCalc } from "../hooks/use-calc"

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
          className={`${keyboardKeyPress === 'Delete' ? 'bg-cyan-400/30' : 'bg-gray-600'}  active:bg-cyan-400/30  transition-colors rounded-lg p-3 text-white font-bold`}
        >AC</button>
        <button 
          className={`${keyboardKeyPress === 'l' ? 'bg-cyan-400/30' : 'bg-gray-600'}    active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >( )</button>
        <button 
          className={`${keyboardKeyPress === '/' ? 'bg-cyan-400/30' : 'bg-gray-600'}    active:bg-cyan-400/30 sition-colors rounded-lg p-3 text-white font-bold`}
        >/</button>
        <button 
          className={`${keyboardKeyPress === '*' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 sition-colors rounded-lg p-3 text-white font-bold`}
        >x</button>
        <button 
          className={`${keyboardKeyPress === '7' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 sition-colors rounded-lg p-3 text-white font-bold`}
        >7</button>
        <button 
          className={`${keyboardKeyPress === '8' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 sition-colors rounded-lg p-3 text-white font-bold`}
        >8</button>
        <button 
          className={`${keyboardKeyPress === '9' ? 'bg-cyan-400/30' : 'bg-gray-600'}    active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >9</button>
        <button 
          className={`${keyboardKeyPress === '-' ? 'bg-cyan-400/30' : 'bg-gray-600'}    active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >-</button>
        <button 
          className={`${keyboardKeyPress === '4' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >4</button>
        <button 
          className={`${keyboardKeyPress === '5' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >5</button>
        <button 
          className={`${keyboardKeyPress === '6' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >6</button>
        <button 
          className={`${keyboardKeyPress === '+' ? 'bg-cyan-400/30' : 'bg-gray-600'}    active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >+</button>
        <button 
          className={`${keyboardKeyPress === '1' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >1</button>
        <button 
          className={`${keyboardKeyPress === '2' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >2</button>
        <button 
          className={`${keyboardKeyPress === '3' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >3</button>
        <button 
          className={`${keyboardKeyPress === '=' ? 'bg-cyan-400/30' : 'bg-cyan-300/30'} active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold row-span-2`}
        >=</button>
        <button 
          className={`${keyboardKeyPress === '0' ? 'bg-cyan-400/30' : 'bg-gray-600/50'} active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold col-span-2`}
        >0</button>
        <button 
          className={`${keyboardKeyPress === '.' ? 'bg-cyan-400/30' : 'bg-gray-600'}    active:bg-cyan-400/30 transition-colors rounded-lg p-3 text-white font-bold`}
        >.</button>
      </section>
    </article>
  )
}