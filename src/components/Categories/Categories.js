import Logo from '../Logo/Logo'
import Category from '../Category/Category'
import { FiHeart } from 'react-icons/fi'
import { BsStars, BsSearch } from 'react-icons/bs'
import { FaTheaterMasks, FaRegCompass } from 'react-icons/fa'
import { RiSpaceShipLine } from 'react-icons/ri'
import { ImBooks } from 'react-icons/im'
import { GiBlackBook, GiBookCover } from 'react-icons/gi'
import batIcon from './assets/bat.png'
import bearIcon from './assets/bear.png'

const bookCategories = [
  { title: 'Romance', icon: <FiHeart size={35} />, slug: 'romance' },
  { title: 'Fantasía', icon: <BsStars size={35} />, slug: 'fantasia' },
  { title: 'Terror', icon: <img src={batIcon} alt='Terror' />, slug: 'terror' },
  { title: 'Teatral', icon: <FaTheaterMasks size={35} />, slug: 'teatral' },
  { title: 'Ciencia Ficción', icon: <RiSpaceShipLine size={35} />, slug: 'ciencia-ficcion', },
  { title: 'Policial', icon: <BsSearch size={35} />, slug: 'policial' },
  { title: 'Aventura', icon: <FaRegCompass size={35} />, slug: 'aventura' },
  { title: 'Juvenil', icon: <img src={bearIcon} alt='Juvenil' />, slug: 'juvenil', },
  { title: 'Colecciones', icon: <ImBooks size={35} />, slug: 'coleccion' },
  { title: 'Novelas', icon: <GiBlackBook size={35} />, slug: 'novela' },
  { title: 'Cuentos y relatos', icon: <GiBookCover size={35} />, slug: 'cuento', },
]

const Categories = ({ handleClick }) => {
  return (
    <div>
      <div className='w-fit mx-auto mb-10'>
        <Logo />
      </div>
      <div className='bg-base-300 py-8'>
        <div className='w-5/6 max-w-[1200px] mx-auto grid gap-4 grid-cols-2 justify-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          {bookCategories.map(cat => (
            <Category
              key={cat.title}
              title={cat.title}
              icon={cat.icon}
              slug={cat.slug}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
