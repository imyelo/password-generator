import React from 'react'
import classnames from 'classnames/bind'
import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'
import styles from './App.module.less'

const cx = classnames.bind(styles)

const App = () => {
  return <div className={cx('main')}>
    <div className={cx('header')}>Password Generator</div>
    <form className={cx('generator')}>
      <Input label="Length" />
      <div className={cx('checkboxs')}>
        <Checkbox label="Uppercase" />
        <Checkbox label="Lowercase" />
        <Checkbox label="Numbers" />
        <Checkbox label="Symbols" />
      </div>
      <Button>Regenerate</Button>
    </form>
    <div className={cx('result')}>
      a#123asdf988a#123asdf988a#123asdf988a#123asdf988
    </div>
  </div>
}

export default App
