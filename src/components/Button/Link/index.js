import React from 'react'

import cn from 'classnames'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Icon from '../../Icon'
import buttonTypes from '../constants/buttonTypes'
import styles from '../styles.module.scss'

const ButtonLink = ({
  children,
  type,
  className,
  to,
  icon,
  id,
  tabIndex,
  disabled,
  onClick,
  shouldOpenNewTab
}) => {
  const allChildren = (
    <>
      {icon && (
        <Icon
          className={styles.Button___withIcon_icon}
          data-test="icon"
          icon={icon}
        />
      )}
      {children}
    </>
  )

  return to.startsWith('http')
    ? (
    <a
      className={cn(
        className,
        styles.Button___link,
        styles[`Button___${type}`],
        {
          [styles.Button___withIcon]: icon !== null,
          [styles.Button___disabled]: disabled
        }
      )}
      data-test="nativeAnchor"
      href={to}
      id={id}
      rel="noreferrer"
      tabIndex={tabIndex}
      target={shouldOpenNewTab ? '_blank' : null}
      onClick={onClick}
    >
      {allChildren}
    </a>
      )
    : (
    <Link
      className={cn(
        className,
        styles.Button___link,
        styles[`Button___${type}`],
        {
          [styles.Button___withIcon]: icon !== null,
          [styles.Button___disabled]: disabled
        }
      )}
      data-test="reactRouterLink"
      id={id}
      tabIndex={tabIndex}
      to={to}
      onClick={onClick}
    >
      {allChildren}
    </Link>
      )
}

ButtonLink.defaultProps = {
  type: buttonTypes.PRIMARY.YELLOW,
  className: null,
  id: null,
  icon: null,
  tabIndex: 0,
  disabled: false,
  onClick: null,
  shouldOpenNewTab: true,
}

ButtonLink.propTypes = {
  type: PropTypes.oneOf([
    buttonTypes.PRIMARY.RED,
    buttonTypes.PRIMARY.YELLOW,
    buttonTypes.TEXT.RED
  ]),
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  id: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  shouldOpenNewTab: PropTypes.bool,
}

export default ButtonLink
