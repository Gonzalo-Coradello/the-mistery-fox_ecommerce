import { useEffect, useState } from 'react'
import { useSessionContext } from '../../context/UserContext'
import GhostLink from '../Buttons/GhostLink'
import { FaGithub, FaLinkedinIn, FaInstagram, FaBehance, FaLaptopCode } from 'react-icons/fa'
import GhostButton from '../Buttons/GhostButton'

const socialLinks = [
  { key: 1, name: 'Portfolio Gonzalo', icon: <FaLaptopCode after='Portfolio Gonzalo' size={30} />, url: 'https://gonzalodev.vercel.app/' },
  { key: 2, name: 'LinkedIn Gonzalo', icon: <FaLinkedinIn after='LinkedIn Gonzalo' size={30} />, url: 'https://www.linkedin.com/in/gonzalo-coradello/' },
  { key: 3, name: 'Github Gonzalo', icon: <FaGithub after='Github Gonzalo' size={30} />, url: 'https://github.com/Gonzalo-Coradello' },
  { key: 4, name: 'Behance Talia', icon: <FaBehance after='' size={30} />, url: 'https://www.behance.net/talialaborde' },
  { key: 5, name: 'LinkedIn Talia', icon: <FaLinkedinIn after='LinkedIn Talia' size={30} />, url: 'https://www.linkedin.com/in/talia-laborde/' },
  { key: 6, name: 'Instagram Linné Studio', icon: <FaInstagram after='Instagram Linné Studio' size={30} />, url: 'https://www.instagram.com/linnestudio_/' },
]


const Footer = () => {

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
    <footer className='footer footer-center px-10 py-8 bg-base-300 text-base-content rounded'>
      <div className='grid grid-flow-col gap-4'>
        { links.map(({ key, path, slug }) => slug === 'contacto' ? <GhostButton key={key}><a href={path}>{slug}</a></GhostButton> : <GhostLink key={key} url={path} classes='min-w-max'>{slug}</GhostLink>)}
      </div>
      <div>
        <div className='grid grid-flow-col gap-8'>
          { socialLinks.map(({ key, name, icon, url }) => <GhostButton key={key} square={true} classes='btn-md' ><a href={url} target='_blank' rel='noreferrer' >{icon}</a></GhostButton>) }
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
