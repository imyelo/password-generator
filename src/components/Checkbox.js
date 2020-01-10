import React, { useState, useEffect } from 'react'
import classnames from 'classnames/bind'
import styles from './Checkbox.module.less'

const cx = classnames.bind(styles)

const Checkbox = ({ label, checked, onChange, ...props }) => {
  const [ isChecked, setIsChecked ] = useState(checked)

  useEffect(() => {
    onChange(isChecked)
  }, [isChecked])

  const inputChangeHandler = (e) => onChange(e.target.value)

  const clickHandler = () => setIsChecked((isChecked) => !isChecked)

  return (
    <div className={cx('checkbox')} onClick={clickHandler}>
      <input type="checkbox" checked={isChecked} onChange={inputChangeHandler} {...props} />
      <span className={cx('checkmark')}></span>
      <label>{ label }</label>
    </div>
  )
}

export default Checkbox
