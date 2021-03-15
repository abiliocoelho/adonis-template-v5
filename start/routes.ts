import Route from '@ioc:Adonis/Core/Route'

Route.post('/session', 'SessionsController.store')

Route.resource('/user', 'UsersController')

Route.get('/', async ({ logger }) => {
  logger.info('An info message')
  return 'handled'
})
