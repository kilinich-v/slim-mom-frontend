import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getIsLoggedOn } from '../../redux/registration/Selectors'
import { getToken } from '../../redux/registration/Selectors'
import styles from './Header.module.scss'

import UserInfo from './UserInfo'

import { useWindowWidth } from '@react-hook/window-size'
const Navigation = () => {
  //   const authToken = useSelector(getToken)
  const authToken = 1
  const onlyWidth = useWindowWidth()

  return (
    <>
      {!authToken && (
        <div className={styles.nav}>
          <NavLink to="/" exact className={styles.logo}></NavLink>
          <NavLink
            to="/auth"
            exact
            className={styles.link}
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
      {authToken && (
        <>
          <div className={styles.nav}>
            <NavLink to="/" exact className={styles.logo}></NavLink>
            <NavLink
              to="/diary"
              exact
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              ДНЕВНИК
            </NavLink>
            <NavLink
              to="/calculator"
              exact
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              КАЛЬКУЛЯТОР
            </NavLink>
            {/* <div className={styles.userInfoNav}>
              <UserInfo />
            </div> */}
          </div>
        </>
      )}

      {onlyWidth >= 768 ? <UserInfo /> : ''}
    </>
  )
}

export default Navigation
