import React from 'react'
import { isLoad, isSuccess } from '../../../utils'
import Container from '../Container/Container'
import { Redirect, Route } from 'react-router'
import { connect } from 'react-redux'

const PrivateRoute = ({ checkTokenStatus, routeProps, isAuth }) => {

  if (!isAuth && !isLoad(checkTokenStatus)) {
    return (
      <Redirect to={'/auth'}/>
    )
  }

  if (isAuth && isSuccess(checkTokenStatus)) {
    return (
      <Route {...routeProps} />
    )
  }
  return (
    <Container>
      Wait
    </Container>
  )
}

export default connect((store, ownProps) => ({
  checkTokenStatus: store.auth.checkTokenStatus,
  isAuth: store.auth.isAuth,
  routeProps: ownProps
}), {})(PrivateRoute)
