import { createContext, useContext, useEffect, useState } from 'react'
import {
  getCurrentUser,
  login,
  register,
  githubLogin,
  logout,
} from '../services/axios/userService'

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
    getCurrentUser()
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

  const getUser = async () => await getCurrentUser()

  const registerUser = async data => await register(data)

  const loginWithEmail = async (email, password) => {
    const data = await login(email, password)
    setIsLogged(true)
    setUser(data.payload)
  }

  const loginWithGithub = async () => {
    const result = await githubLogin()
    setIsLogged(true)
    setUser(result)
    return result
  }

  const logoutUser = () => {
    setIsLogged(false)
    setUser(null)
    logout()
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        loading,
        setLoading,
        getUser,
        registerUser,
        loginWithEmail,
        loginWithGithub,
        logoutUser,
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
