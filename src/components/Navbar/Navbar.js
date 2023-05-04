import { Link, useLocation } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {

    const location = useLocation()
    const isLoggedIn = false

    return (
        <nav className={location.pathname === '/' ? 'text-secondary' : 'text-primary'}>
            <div className="navbar fixed bg-transparent z-10 backdrop-blur-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-max">
                        <li><Link to="/" className="text-left">inicio</Link></li>
                        <li><Link to="/books" className="text-left">nuestros libros</Link></li>
                        <li><Link to="#" className="text-left">contacto</Link></li>
                        <li><Link to="#" className="text-left">mi cuenta</Link></li>
                        { 
                            isLoggedIn ? 
                            <li><Link to="#" className="text-left">mi cuenta</Link></li> :
                            <>
                                <li><Link to="#" className="text-left">iniciar sesión</Link></li>
                                <li><Link to="#" className="text-left">registrarse</Link></li>
                            </>
                        }
                    </ul>
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <ul className="px-1 hidden lg:flex gap-4">
                        <li><Link to="/" className="btn btn-sm btn-ghost normal-case font-normal rounded-md">inicio</Link></li>
                        <li><Link to="/books" className="btn btn-sm btn-ghost normal-case font-normal rounded-md">nuestros libros</Link></li>
                        <li><Link to="#" className="btn btn-sm btn-ghost normal-case font-normal rounded-md">contacto</Link></li>
                        { 
                            isLoggedIn ? 
                            <li><Link to="#" className="btn btn-sm btn-ghost normal-case font-normal rounded-md">mi cuenta</Link></li> :
                            <>
                                <li><Link to="#" className="btn btn-sm btn-ghost normal-case font-normal rounded-md">iniciar sesión</Link></li>
                                <li><Link to="#" className="btn btn-sm btn-ghost normal-case font-normal rounded-md">registrarse</Link></li>
                            </>
                        }
                    </ul>
                    { isLoggedIn && <CartWidget />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar