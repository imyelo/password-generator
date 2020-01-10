import React, { useState, useEffect } from 'react'
import Debug from 'debug'
import * as copy from 'copy-to-clipboard'
import classnames from 'classnames/bind'
import { createSnackbar } from '@snackbar/core'
import configStore from '../utils/config-store'
import generate from '../utils/generate'
import Input from './Input'
import Checkbox from './Checkbox'
import Icon from './Icon'
import styles from './App.module.less'
import { SNACKBAR_TIMEOUT,DEFAULT_LENGTH, DEFAULT_CHECKBOXES, MAX_LENGTH } from '../constants'

const debug = Debug('app')

const cx = classnames.bind(styles)

const isInteger = (n) => /^\d*$/.test(n)

const App = () => {
  const [ length, setLength ] = useState(DEFAULT_LENGTH)
  const [ checkboxes, setCheckboxes ] = useState(DEFAULT_CHECKBOXES)
  const [ password, setPassword ] = useState('')

  const setLengthFromString = (value) => {
    if (!isInteger(value)) {
      return
    }
    setLength(Math.min(MAX_LENGTH, +value))
  }

  useEffect(() => {
    const apply = ({ length, checkboxes }) => {
      debug('apply', length, checkboxes)
      if (length) {
        setLengthFromString(length)
      }
      if (checkboxes && Object.keys(checkboxes).length) {
        setCheckboxes((original) => ({
          ...original,
          ...checkboxes,
        }))
      }
    }

    configStore.load().map((config) => apply(config))
  }, [])

  useEffect(() => submit(), [length, checkboxes])

  const submit = () => {
    try {
      setPassword(generate({ length, characters: checkboxes }))
      debug('submit', length, checkboxes)
      const config = {
        length,
        checkboxes,
      }
      configStore.save(config)
    } catch (error) {
      setPassword('')
      console.error(error)
    }
  }

  const lengthChangeHandler = (e) => {
    setLengthFromString(e.target.value)
  }

  const checkboxChangeHandler = (name) => (value) => {
    setCheckboxes((checkboxes) => ({
      ...checkboxes,
      [name]: value,
    }))
  }

  const headerClickHandler = () => {
    submit()
  }

  const resultClickHandler = () => {
    if (!password) {
      return
    }
    copy(password)
    createSnackbar('Copied!', {
      timeout: SNACKBAR_TIMEOUT,
    })
  }

  return <div className={cx('main')}>
    <div className={cx('header')} onClick={headerClickHandler}>
      <span className={cx('title')}>Password Generator</span>
      <span className={cx('icon')}><Icon name="refresh" /></span>
    </div>
    <form className={cx('generator')}>
      <Input label="Length" type="mobile" value={length} onChange={lengthChangeHandler} />
      <div className={cx('checkboxes')}>
        <Checkbox label="Uppercase" checked={checkboxes.uppercase} onChange={checkboxChangeHandler('uppercase')} />
        <Checkbox label="Lowercase" checked={checkboxes.lowercase} onChange={checkboxChangeHandler('lowercase')} />
        <Checkbox label="Numbers" checked={checkboxes.numbers} onChange={checkboxChangeHandler('numbers')} />
        <Checkbox label="Symbols" checked={checkboxes.symbols} onChange={checkboxChangeHandler('symbols')} />
      </div>
    </form>
    <div className={cx('result')} onClick={resultClickHandler}>
      <div className={cx('value')}>{password}</div>
      { password ? <div className={cx('icon')}><Icon name="copy" /></div> : null }
    </div>
    <div className={cx('copyright')}>
      <a href="https://github.com/imyelo/password-generator" target="_blank">Source</a>
      <span className={cx('symbol')}>&copy;</span>
      <a href="https://yelo.cc" target="_blank">made by yelo</a>
    </div>
  </div>
}

export default App
