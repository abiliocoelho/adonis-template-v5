import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bull from '@ioc:Rocketseat/Bull'
import Job from 'App/Jobs/UserRegisterEmail'
export default class TestsController {

  index({ }: HttpContextContract) {

    const email = "abiliocoelho@gmail.com"
    const password = '123456'

    Bull.add(new Job().key, {email, password})
  }
}
