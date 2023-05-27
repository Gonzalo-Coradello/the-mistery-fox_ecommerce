import { createContext, useContext, useEffect, useState } from 'react'
import User from '../services/axios/userService'
const userService = new User()

export const UserContext = createContext({
  user: null,
  isLogged: false,
})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(true)
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    setLoading(true)
    userService.getCurrentUser()
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

  const getUser = async () => await userService.getCurrentUser()

  const register = async data => await userService.register(data)

  const loginWithEmail = async (email, password) => {
    const data = await userService.login(email, password)
    setIsLogged(true)
    setUser(data.payload)
  }

  const loginWithGithub = async () => {
    const result = await userService.githubLogin()
    setIsLogged(true)
    setUser(result)
    return result
  }

  const logout = () => {
    setIsLogged(false)
    setUser(null)
    userService.logout()
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
