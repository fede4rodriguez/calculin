import { create } from 'zustand'

export interface ICalc {
  initialValue?: number
  items?: {
    value: number
    operator: string
  }[]
  result?: number
}

export interface ICalcFull extends ICalc {
  id: string
  comment?: string
}

interface IUseHistory {
  history: ICalcFull[]
  addCalc: (props: ICalc) => string
  addComment: (props: { id: string, comment: string }) => void
  clearHistory: () => void
}

export const useHistory = create<IUseHistory>((set) => ({
  history: [],
  addCalc: (props) => {
    const id = Math.random().toString(36).substr(2, 9)
    set(state => ({ history: [...state.history, {id, ...props}] }))
    return id
  },
  addComment: ({ id, comment }) => set(state => { 
    const newHistory = state.history.map(calc => {
      if(calc.id === id) {
        return { ...calc, comment }
      }
      return calc
    })
    set(state => ({ history: newHistory }))
  }),
  clearHistory: () => set({ history: [] })
}))