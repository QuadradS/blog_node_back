import React, { useState } from 'react'
import Container from '../../components/common/Container/Container'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Input'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { authSignIn } from '../../state/auth/actions'
import { isError, isRequesting } from '../../utils'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

function AuthPage({ isAuth, authStatus, authSignIn }) {

  const [authData, setAuthData] = useState({ login: '', password: '' })
  const onChange = (key) => (e) => setAuthData({ ...authData, [key]: e.target.value })
  const onSubmit = () => {
    if (authData.login && authData.password) {
      authSignIn(authData)
    }
  }

  const isButtonBlock = !authData.login || !authData.password || isRequesting(authStatus)
  if(isAuth){
    return <Redirect to={'/'}/>
  }
  return (
    <Container maxWidth={1200}>
      <div className={styles.auth_wrap}>
        <div className={styles.auth_container}>
          <div>Sign in</div>
          <Input placeholder={'login'} value={authData.login} onChange={onChange('login')} className={styles.input}/>
          <Input placeholder={'password'} value={authData.password} onChange={onChange('password')} className={styles.input}/>
          {isRequesting(authStatus) && <div>Wait</div>}
          {isError(authStatus) && <div>Error</div>}
          <Link to={'/registration'}>Create account</Link>
          <Button disabled={isButtonBlock} className={styles.button} onClick={onSubmit}>Log in</Button>
        </div>
      </div>
    </Container>
  )
}

export default connect((store) => ({
  isAuth: store.auth.isAuth,
  authStatus: store.auth.authStatus
}), {
  authSignIn
})(AuthPage)
