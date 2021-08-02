import React, { Component } from 'react'

import styles from './BurgerMenu.module.scss'

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc)
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc)
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
  }

  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.hideModal()
    }
  }
  onHandleClick = () => {
    this.props.hideModal()
  }
  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return
    this.props.hideModal()
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    )
  }
}

export default Modal
