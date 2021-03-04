import { JobContract } from '@ioc:Rocketseat/Bull'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class UserRegisterEmail implements JobContract {
  public key = 'UserRegisterEmail'

  public async handle(job) {
    const { data } = job
    Mail.send((message) => {
  message
    .from('info@example.com')
    .to(data.email)
    .subject('Welcome Onboard!')
    .htmlView('emails/create_user', { email:data.email, password: data.password })
})
  }
}
