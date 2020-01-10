import React from 'react'
import classnames from 'classnames/bind'
import styles from './Button.module.less'

const cx = classnames.bind(styles)

const Button = (props) => {
  return (
    <button className={cx('button')} {...props} />
  )
}

export default Button
