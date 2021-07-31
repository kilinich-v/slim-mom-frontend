import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getToken } from '../../redux/registration/Selectors'
import styles from './Header.module.scss'

import UserInfo from './UserInfo'

import { useWindowWidth } from '@react-hook/window-size'
const Navigation = () => {
  const authToken = useSelector(getToken)
  // const authToken = 1
  const onlyWidth = useWindowWidth()
  // const page = props.location.pathname.indexOf('/auth')
  return (
    <>
      {!authToken && (
        <div className={styles.nav}>
          <NavLink to="/" exact className={styles.logo}></NavLink>
          <NavLink
            to="/auth"
            exact
            className={onlyWidth >= 1280 ? styles.authLink : styles.link}
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

            {onlyWidth > 1280 || onlyWidth < 768 ? (
              <NavLink
                to="/diary"
                exact
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                ДНЕВНИК
              </NavLink>
            ) : (
              ''
            )}
            {onlyWidth > 1280 || onlyWidth < 768 ? (
              <NavLink
                to="/calculator"
                exact
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                КАЛЬКУЛЯТОР
              </NavLink>
            ) : (
              ''
            )}
            {onlyWidth >= 768 && onlyWidth < 1280 ? (
              <div className={styles.userInfoNav}>
                <UserInfo />
              </div>
            ) : (
              ''
            )}
          </div>
          {onlyWidth < 768 ? (
            <div className={styles.userInfoNav}>
              <UserInfo />
            </div>
          ) : (
            ''
          )}
        </>
      )}
    </>
  )
}

export default Navigation
