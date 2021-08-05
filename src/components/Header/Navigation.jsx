import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getIsLoggedOn } from '../../redux/registration/Selectors'
import styles from './Header.module.scss'

import UserInfo from './UserInfo'

import { useWindowWidth } from '@react-hook/window-size'
const Navigation = ({ isModalOpen, setModalState }) => {
  const authToken = useSelector(getIsLoggedOn)
  // const authToken = 1
  const onlyWidth = useWindowWidth()

  return (
    <>
      {!authToken && (
        <div className={styles.nav}>
          <NavLink to="/" exact className={styles.logo}></NavLink>
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
        </div>
      )}
      {authToken && (
        <>
          <div className={styles.nav}>
            <NavLink
              to="/"
              exact
              className={onlyWidth < 780 ? styles.BigLogo : styles.logo}
            ></NavLink>
            {onlyWidth < 768 ? (
              <button
                className={isModalOpen ? styles.closeButton : styles.menuButton}
                onClick={() => setModalState()}
              ></button>
            ) : null}
            {onlyWidth >= 1280 ? (
              <>
                <NavLink
                  to="/diary"
                  exact
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  ДНЕВНИК
                </NavLink>
                <NavLink
                  to="/calculator"
                  exact
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  КАЛЬКУЛЯТОР
                </NavLink>
              </>
            ) : null}
            {onlyWidth >= 768 && onlyWidth < 1280 ? (
              <div className={styles.userInfoNav}>
                <UserInfo />
                <button
                  className={
                    isModalOpen ? styles.closeButton : styles.menuButton
                  }
                  onClick={() => setModalState()}
                ></button>
              </div>
            ) : null}
          </div>

          {onlyWidth < 768 ? (
            <div className={styles.userInfoNav}>
              <UserInfo />
            </div>
          ) : null}
        </>
      )}
    </>
  )
}

export default Navigation
