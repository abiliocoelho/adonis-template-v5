import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  async store({ request }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.create({ email, password })
    return user

  }
}
