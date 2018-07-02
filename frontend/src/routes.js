import React from 'react'
import Home from './Home'
import Login from './Login'

import {asyncComponent} from '@kitspace/after'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
]
