import { createContext, useContext, useEffect, useState } from 'react'
import UserService from '../services/axios/userService'

export const UserContext = createContext({
  user: null,
  isLogged: false,
})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(true)
  const [firstRender, setFirstRender] = useState(true)
  console.log('STATE: ', { user, isLogged, loading })

  useEffect(() => {
    setLoading(true)
    UserService.getCurrentUser()
      .then(data => {
        if (data.payload) {
          setIsLogged(true)
          setUser(data.payload)
        } else {
          setIsLogged(false)
          setUser(null)
        }
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        setFirstRender(false)
        setLoading(false)
      })
  }, [])

  const getUser = async () => await UserService.getCurrentUser()

  const register = async data => await UserService.register(data)

  const loginWithEmail = async (email, password) => {
    const data = await UserService.login(email, password)
    setIsLogged(true)
    setUser(data.payload)
  }

  const loginWithGithub = async () => {
    const result = await UserService.githubLogin()
    setIsLogged(true)
    setUser(result)
    return result
  }

  const logout = () => {
    setIsLogged(false)
    setUser(null)
    UserService.logout()
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        loading,
        setLoading,
        getUser,
        register,
        loginWithEmail,
        loginWithGithub,
        logout,
        firstRender,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useSessionContext = () => {
  return useContext(UserContext)
}
