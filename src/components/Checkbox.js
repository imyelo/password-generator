import React from 'react'
import classnames from 'classnames/bind'
import styles from './Checkbox.module.less'

const cx = classnames.bind(styles)

const Checkbox = ({ label, ...props }) => {
  return (
    <div className={cx('checkbox')}>
      <input type="checkbox" {...props} />
      <span className={cx('checkmark')}></span>
      <label>{ label }</label>
    </div>
  )
}

export default Checkbox
