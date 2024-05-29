import React from 'react'
import ContactForm from './ContactForm'
import styles from "./Styles/SearchBar.module.css"

const SignUp = () => {
  return (
    <div className ={styles.form}>
    <ContactForm />
    </div>
  )
}

export default SignUp;