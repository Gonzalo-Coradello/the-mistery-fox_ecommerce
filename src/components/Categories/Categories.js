import Logo from "../Logo/Logo";
import Category from "../Category/Category";
import { FiHeart } from 'react-icons/fi'
import { BsStars, BsSearch } from 'react-icons/bs'
import { FaTheaterMasks, FaRegCompass } from 'react-icons/fa'
import { RiSpaceShipLine } from 'react-icons/ri'
import { ImBooks } from 'react-icons/im'

const bookCategories = [
    { title: 'Romance', icon: <FiHeart size={35} /> },
    { title: 'Fantasía', icon: <BsStars size={35} /> },
    { title: 'Terror', icon: <FiHeart size={35} /> },
    { title: 'Teatral', icon: <FaTheaterMasks size={35} /> },
    { title: 'Ciencia Ficción', icon: <RiSpaceShipLine size={35} /> },
    { title: 'Policial', icon: <BsSearch size={35} /> },
    { title: 'Aventura', icon: <FaRegCompass size={35} /> },
    { title: 'Juvenil', icon: <FiHeart size={35} /> },
    { title: 'Colecciones', icon: <ImBooks size={35} /> },
    { title: 'Novelas', icon: <ImBooks size={35} /> },
    { title: 'Cuentos y relatos', icon: <ImBooks size={35} /> }
]

const Categories = () => {
    return (
        <div>
            <div className="w-fit mx-auto mb-10">
                <Logo />
            </div>
            <div className="bg-base-300 py-8">
                <div className="w-5/6 max-w-[1200px] mx-auto grid gap-4 grid-cols-2 justify-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {bookCategories.map( cat => <Category key={cat.title} title={cat.title} icon={cat.icon} /> )}
                </div>
            </div>
        </div>
    )
}

export default Categories