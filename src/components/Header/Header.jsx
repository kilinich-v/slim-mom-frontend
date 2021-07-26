import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import styles from './Header.module.scss'
import Container from '../Container'

const Header = () => {
  return (
    <Container>
      <div className={styles.nav}>
        <div className={styles.logo}></div>
        <NavLink to="/auth" exact className={styles.link}>
          ВХОД
        </NavLink>
        <NavLink to="/auth" exact className={styles.link}>
          РЕГИСТРАЦИЯ
        </NavLink>
      </div>

      <div>
        <NavLink to="/register" exact className={styles.link} to="/diary">
          ДНЕВНИК
        </NavLink>
        <NavLink to="/login" exact className={styles.link} to="/calculator">
          КАЛЬКУЛЯТОР
        </NavLink>
      </div>
    </Container>
  )
}

export default Header
