import * as user from './controller'

export const baseUrl = '/users'

export default [
  {
    method: 'GET',
    route: '/',
    handlers: [
      user.getUsers
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      user.getUser
    ]
  }
]
