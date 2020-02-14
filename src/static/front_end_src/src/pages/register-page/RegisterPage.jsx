import React, { useEffect, useState } from 'react'
import styles from '../auth-page/styles.module.scss'
import Input from '../../components/common/Input/Input'
import { isError, isRequesting, isSuccess } from '../../utils'
import Button from '../../components/common/Button/Input'
import Container from '../../components/common/Container/Container'
import { connect } from 'react-redux'
import { authSignUp, authSignUpClear } from '../../state/auth/actions'
import { Link } from 'react-router-dom'

const RegisterPage = ({ authSignUp, authSignUpClear, signUpStatus }) => {

  useEffect(() => {
    return authSignUpClear
  }, [])

  const [authData, setAuthData] = useState({ login: '', password: '', name: '' })
  const onChange = (key) => (e) => setAuthData({ ...authData, [key]: e.target.value })
  const onSubmit = () => {
    if (authData.login && authData.password) {
      authSignUp(authData)
    }
  }
  const isButtonBlock = !authData.login || !authData.password || isRequesting(signUpStatus)
  return (
    <Container maxWidth={1200}>
      <div className={styles.auth_wrap}>
        <div className={styles.auth_container}>
          <div>Create account</div>
          <Input placeholder={'login'} value={authData.login} onChange={onChange('login')} className={styles.input}/>
          <Input placeholder={'name'} value={authData.name} onChange={onChange('name')} className={styles.input}/>
          <Input placeholder={'password'} value={authData.password} onChange={onChange('password')}
                 className={styles.input}/>

          {isRequesting(signUpStatus) ? <div>Wait</div> : (
            <Button disabled={isButtonBlock} className={styles.button} onClick={onSubmit}>Create account</Button>
          )}
          {isError(signUpStatus) && <div>Error</div>}
          {isSuccess(signUpStatus) && <div>Account created <Link to={'/auth'}>Log in</Link></div>}
        </div>
      </div>
    </Container>
  )
}

export default connect((store) => ({
  signUpStatus: store.auth.signUpStatus
}), {
  authSignUp,
  authSignUpClear
})(RegisterPage)
