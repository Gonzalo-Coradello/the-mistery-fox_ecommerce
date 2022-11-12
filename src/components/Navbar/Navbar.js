import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {

    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link>Homepage</Link></li>
                    <li><Link>Portfolio</Link></li>
                    <li><Link>About</Link></li>
                </ul>
                </div>
            </div>
            <div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Bookstore</Link>
            </div>
            <div className="navbar-end">
                <CartWidget />
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt="usuario" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className="justify-between">Profile<span className="badge">New</span></Link></li>
                        <li><Link>Settings</Link></li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar