export enum COMMANDS {
  'equal',
  'backspace',
  'delete', 
}

export enum OPERATORS {
  '+',
  '-',
  '*',
  '/',
}

type KeyboardValues = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | OPERATORS | COMMANDS;

export const KEYBOARD_KEYS: {[key: string]: KeyboardValues} = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '.': '.',
  '+': OPERATORS["+"],
  '-': OPERATORS["-"],
  '*': OPERATORS["*"],
  '/': OPERATORS["/"],
  '=': COMMANDS["equal"],
  'Enter': COMMANDS["equal"],
  'Backspace': COMMANDS["backspace"],
  'Delete': COMMANDS["delete"],
}