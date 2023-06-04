import { useLocation } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useSessionContext } from '../../context/UserContext'
import { useEffect, useState } from 'react'
import GhostLink from '../Buttons/GhostLink'
import GhostButton from '../Buttons/GhostButton'

const Navbar = () => {
  const location = useLocation()
  const { user, isLogged } = useSessionContext()
  const [links, setLinks] = useState([])

  useEffect(() => {
    const currentLinks = [
      { key: 1, path: '/', slug: 'inicio' },
      { key: 2, path: '/books', slug: 'nuestros libros' },
      { key: 3, path: 'mailto:gonzalocoradello@gmail.com', slug: 'contacto' },
    ]

    isLogged
      ? user.role === 'admin'
        ? currentLinks.push(
            // ADMIN ↓
            { key: 4, path: '/products', slug: 'administrar productos' },
            { key: 5, path: '/users', slug: 'administrar usuarios' },
            { key: 6, path: '/sessions/user', slug: 'mi cuenta' }
          )
        : user.role === 'premium'
        ? currentLinks.push(
            // PREMIUM ↓
            { key: 4, path: '/products', slug: 'administrar productos' },
            { key: 6, path: '/sessions/user', slug: 'mi cuenta' }
          )
        : currentLinks.push({
            // USER ↓
            key: 6,
            path: '/sessions/user',
            slug: 'mi cuenta',
          })
      : currentLinks.push(
          // NOT LOGGED IN ↓
          { key: 7, path: '/sessions/login', slug: 'iniciar sesión' },
          { key: 8, path: '/sessions/register', slug: 'registrarse' }
        )

    setLinks(currentLinks)
  }, [user, isLogged])

  return (
    <nav
      className={location.pathname === '/' ? 'text-secondary' : 'text-primary'}>
      <div
        className={`navbar fixed z-20 backdrop-blur-sm pr-4 ${
          location.pathname === '/' ? 'bg-white/10' : 'bg-transparent'
        }`}>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-max ${
                location.pathname === '/'
                  ? 'bg-white/10 backdrop-blur-sm'
                  : 'bg-base-300'
              } `}>
              {links.map(({ key, path, slug }) => (
                <li key={key}>
                  {slug === 'contacto' ? (
                    <GhostButton>
                      <a href={path}>{slug}</a>
                    </GhostButton>
                  ) : (
                    <GhostLink url={path}>{slug}</GhostLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex justify-end w-full'>
          <ul className='px-4 hidden lg:flex gap-4'>
            {links.map(({ key, path, slug }) => (
              <li key={key}>
                {slug === 'contacto' ? (
                  <GhostButton>
                    <a href={path}>{slug}</a>
                  </GhostButton>
                ) : (
                  <GhostLink url={path} classes='font-normal rounded-md w-max'>
                    {slug}
                  </GhostLink>
                )}
              </li>
            ))}
          </ul>
          {isLogged && user.role !== 'admin' && <CartWidget />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
