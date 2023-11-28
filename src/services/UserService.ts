import { HttpClient } from '../client/http/http-client'
import { User } from '../types/user'

class UserService {
  getUser = async () => await HttpClient.get<User>('/User')
}

export default new UserService()
