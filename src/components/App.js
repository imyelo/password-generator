import React, { useState } from 'react'
import classnames from 'classnames/bind'
import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'
import styles from './App.module.less'

const cx = classnames.bind(styles)

const isNumber = (n) => /^\d*$/.test(n)

const App = () => {
  const [ length, setLength ] = useState(256)
  const [ checkboxs, setCheckboxs ] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  })
  const [ password, setPassword ] = useState('')

  const submit = () => {
    // TODO
    setPassword('SOMELETTERS')
  }

  const onChangeLength = (e) => {
    const value = e.target.value
    if (!isNumber(value)) {
      return
    }
    setLength(value)
    submit()
  }

  const onClickCheckbox = (name) => () => {
    setCheckboxs((checkboxs) => ({
      ...checkboxs,
      [name]: !checkboxs[name],
    }))
    submit() // TODO: double check
  }

  const onClickRegenerate = (e) => {
    e.preventDefault()
    submit()
  }

  return <div className={cx('main')}>
    <div className={cx('header')}>Password Generator</div>
    <form className={cx('generator')}>
      <Input label="Length" type="mobile" value={length} onChange={onChangeLength} />
      <div className={cx('checkboxs')}>
        <Checkbox label="Uppercase" checked={checkboxs.uppercase} onClick={onClickCheckbox('uppercase')} />
        <Checkbox label="Lowercase" checked={checkboxs.lowercase} onClick={onClickCheckbox('lowercase')} />
        <Checkbox label="Numbers" checked={checkboxs.numbers} onClick={onClickCheckbox('numbers')} />
        <Checkbox label="Symbols" checked={checkboxs.symbols} onClick={onClickCheckbox('symbols')} />
      </div>
      <Button onClick={onClickRegenerate}>Regenerate</Button>
    </form>
    <div className={cx('result')}>
      {password}
    </div>
  </div>
}

export default App
