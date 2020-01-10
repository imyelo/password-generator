import React from 'react'
import classnames from 'classnames/bind'
import styles from './Checkbox.module.less'

const cx = classnames.bind(styles)

const Checkbox = ({ label, onClick, ...props }) => {
  return (
    <div className={cx('checkbox')} onClick={onClick}>
      <input type="checkbox" {...props} />
      <span className={cx('checkmark')}></span>
      <label>{ label }</label>
    </div>
  )
}

export default Checkbox
