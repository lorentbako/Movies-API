import React from 'react'
import ContactForm from './ContactForm'
import styles from "./Styles/Signup.module.css"

const SignUp = () => {
  return (
    <div className ={styles.signup}>
    <ContactForm />
    </div>
  )
}

export default SignUp;