import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import { NotificationProvider } from './services/notification/NotificationService'
import Footer from './components/Footer/Footer'
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer'
import LandingPage from './components/LandingPage/LandingPage'
import Register from './components/sessions/Register/Register'
import Login from './components/sessions/Login/Login'
import { ROLES } from './config/roles'
import RequireAuth from './components/sessions/RequireAuth/RequireAuth'
import { initMercadoPago } from '@mercadopago/sdk-react'
import Success from './components/CheckoutStatus/Success'
import Failure from './components/CheckoutStatus/Failure'
import Pending from './components/CheckoutStatus/Pending'
import { UserProvider } from './context/UserContext'
import CurrentUser from './components/sessions/CurrentUser/CurrentUser'
import ManageProducts from './components/ManageProducts/ManageProducts'
import ManageUsers from './components/ManageUsers/ManageUsers'
import CreateProductForm from './components/CreateProductForm/CreateProductForm'
import ModifyProduct from './components/ModifyProduct/ModifyProduct'
import UpgradeToPremium from './components/sessions/UpgradeToPremium/UpgradeToPremium'
const { user, premium, admin } = ROLES

initMercadoPago(process.env.REACT_APP_MP_publicKey)

function App() {
  return (
    <div className='App'>
      <NotificationProvider>
        <UserProvider>
          <CartProvider>
            <BrowserRouter>
              <header className='header'>
                <Navbar />
              </header>
              <main>
                <Routes>
                  {/* Public */}
                  <Route path='/' element={<LandingPage />} />
                  <Route path='/sessions/login' element={<Login />} />
                  <Route path='/sessions/register' element={<Register />} />

                  {/* Protected */}
                  <Route element={<RequireAuth allowedRoles={[user, premium, admin]} />}>
                    <Route path='/books' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                    <Route path='/sessions/user' element={<CurrentUser />} />

                    <Route element={<RequireAuth allowedRoles={[user]} />}>
                      <Route path='/sessions/user/upgrade' element={<UpgradeToPremium />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[user, premium]} />}>
                      <Route path='/cart' element={<Cart />} />
                      <Route path='/checkout' element={<CheckoutContainer />} />
                      <Route path='/checkout/success' element={<Success />} />
                      <Route path='/checkout/failure' element={<Failure />} />
                      <Route path='/checkout/pending' element={<Pending />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[premium, admin]} />}>
                      <Route path='/products' element={<ManageProducts />} />
                      <Route path='/products/create' element={<CreateProductForm />} />
                      <Route path='/products/edit/:productId' element={<ModifyProduct />} />
                      <Route path='/users' element={<ManageUsers />} />
                    </Route>
                  </Route>

                  <Route path='*' element={<h2>404 NOT FOUND</h2>} />
                </Routes>
              </main>
              <footer>
                <Footer />
              </footer>
            </BrowserRouter>
          </CartProvider>
        </UserProvider>
      </NotificationProvider>
    </div>
  )
}

export default App
