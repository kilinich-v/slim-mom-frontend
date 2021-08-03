import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'
import { getIsLoggedOn } from '../../redux/registration/Selectors'
import { useWindowWidth } from '@react-hook/window-size'
const Logo = () => {
  const authToken = useSelector(getIsLoggedOn)
  // const authToken = 1
  const onlyWidth = useWindowWidth()
  return (
    <>
      <div className={styles.nav}>
        <NavLink to="/" exact className={styles.logo}></NavLink>

        {!authToken && onlyWidth < 1280 && (
          <div>
            <NavLink
              to="/auth"
              exact
              className={styles.authLink}
              activeClassName={styles.linkActive}
            >
              ВХОД
            </NavLink>
            <NavLink
              to="/registration"
              exact
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              РЕГИСТРАЦИЯ
            </NavLink>
          </div>
        )}
      </div>
    </>
  )
}

export default Logo
