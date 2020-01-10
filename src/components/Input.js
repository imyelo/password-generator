import React from 'react'
import classnames from 'classnames/bind'
import styles from './Input.module.less'

const cx = classnames.bind(styles)

const Input = ({ label, ...props }) => {
  return (
    <div className={cx('input')}>
      <label>{ label }</label>
      <input {...props} />
    </div>
  )
}

export default Input
