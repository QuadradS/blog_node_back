import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import AuthPage from './pages/auth-page/auth-page'
import PostPage from './pages/post-page/post-page'
import SinglePostPage from './pages/single-post-page/single-post-page'
import CreatePostPage from './pages/create-post-page/CreatePostPage'
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute'
import { checkToken } from './state/auth/actions'
import { connect } from 'react-redux'
import NotFound from './pages/not-found-page'
import RegisterPage from './pages/register-page/RegisterPage'

const App = ({ checkToken }) => {
  useEffect(checkToken, [])
  return (
    <Switch>
      <Route path={'/auth'} component={AuthPage}/>
      <Route path={'/registration'} component={RegisterPage}/>
      <PrivateRoute exact={true} path={'/'} component={PostPage}/>
      <PrivateRoute path={'/posts/:id'} component={SinglePostPage}/>
      <PrivateRoute path={'/create-post'} component={CreatePostPage}/>
      <PrivateRoute component={NotFound}/>
    </Switch>
  )
}
export default connect(() => {
}, { checkToken })(App)
