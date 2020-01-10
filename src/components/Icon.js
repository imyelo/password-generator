import cx from 'classnames'

const Icon = ({ name }) => (
  <i className={cx('iconfont', `icon-${name}`)} />
)

export default Icon
