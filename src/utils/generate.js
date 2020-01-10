import random from 'crypto-random-string'

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*'

const generate = ({ length, characters: { uppercase, lowercase, numbers, symbols } }) => {
  let characters = ''
    + (uppercase ? UPPERCASE : '')
    + (lowercase ? LOWERCASE : '')
    + (numbers ? NUMBERS : '')
    + (symbols ? SYMBOLS : '')

  if (!characters) {
    throw new Error('characters cannot be empty')
  }

  return random({ length, characters })
}

export default generate
