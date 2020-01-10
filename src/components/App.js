import React, { useState, useEffect } from 'react'
import classnames from 'classnames/bind'
import generate from '../utils/generate'
import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'
import styles from './App.module.less'

const cx = classnames.bind(styles)

const isNumber = (n) => /^\d*$/.test(n)
const MAX_LENGTH = 1024

const App = () => {
  const [ length, setLength ] = useState(16)
  const [ checkboxs, setCheckboxs ] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  })
  const [ password, setPassword ] = useState('')

  useEffect(() => submit(), [length, checkboxs])

  const submit = () => {
    try {
      setPassword(generate({ length, characters: checkboxs }))
    } catch (error) {
      setPassword('')
      console.error(error)
    }
  }

  const lengthChangeHandler = (e) => {
    const value = e.target.value
    if (!isNumber(value)) {
      return
    }
    setLength(Math.min(MAX_LENGTH, +value))
  }

  const checkboxChangeHandler = (name) => (value) => {
    setCheckboxs((checkboxs) => ({
      ...checkboxs,
      [name]: value,
    }))
  }

  const regenerateClickHandler = (e) => {
    e.preventDefault()
    submit()
  }

  return <div className={cx('main')}>
    <div className={cx('header')}>Password Generator</div>
    <form className={cx('generator')}>
      <Input label="Length" type="mobile" value={length} onChange={lengthChangeHandler} />
      <div className={cx('checkboxs')}>
        <Checkbox label="Uppercase" checked={checkboxs.uppercase} onChange={checkboxChangeHandler('uppercase')} />
        <Checkbox label="Lowercase" checked={checkboxs.lowercase} onChange={checkboxChangeHandler('lowercase')} />
        <Checkbox label="Numbers" checked={checkboxs.numbers} onChange={checkboxChangeHandler('numbers')} />
        <Checkbox label="Symbols" checked={checkboxs.symbols} onChange={checkboxChangeHandler('symbols')} />
      </div>
      <Button onClick={regenerateClickHandler}>Regenerate</Button>
    </form>
    <div className={cx('result')}>
      {password}
    </div>
  </div>
}

export default App
