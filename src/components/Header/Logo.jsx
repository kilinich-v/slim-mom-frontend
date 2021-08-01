import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getToken } from '../../redux/registration/Selectors'
import styles from './Header.module.scss'

import { useWindowWidth } from '@react-hook/window-size'
const Logo = () => {
  return (
    <>
      <div className={styles.nav}>
        <NavLink to="/" exact className={styles.logo}></NavLink>
      </div>
    </>
  )
}

export default Logo
