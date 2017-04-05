import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'
import { middleware as reduxPack } from 'redux-pack'
import { routerMiddleware } from 'react-router-redux'

import coin from './coin'

const createMiddleware = isDevelopment => {

  const router = routerMiddleware(createHistory())

  // default middleware
  let middleware = [ reduxPack, router, coin ]

  // logger middleware in development
  if (isDevelopment) middleware.push( createLogger({ collapsed: true }) )

  return middleware

}

export default createMiddleware
