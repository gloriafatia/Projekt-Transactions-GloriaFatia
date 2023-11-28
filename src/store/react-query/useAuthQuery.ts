import { useQuery } from 'react-query'

import { User } from '../../types/user'

import AuthService from '../../services/AuthService'

export const useAuthenticateQuery = () => useQuery<User, Error>('auth', AuthService.authenticateUser)
