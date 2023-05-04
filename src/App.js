import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/NotificationService';
import Footer from './components/Footer/Footer';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';
import LandingPage from './components/LandingPage/LandingPage';
import Register from './components/sessions/Register/Register';
import Login from './components/sessions/Login/Login';
import { ROLES } from './config/roles';
import RequireAuth from './components/sessions/RequireAuth/RequireAuth';
const { user, premium, admin } = ROLES

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <header className="header">
              <Navbar />
            </header>
            <main>
                <Routes>
                  {/* Public */}
                  <Route path='/' element={<LandingPage />} />
                  <Route path='/sessions/login' element={<Login />} />
                  <Route path='/sessions/register' element={<Register />} />
                  
                  {/* Protected */}
                  <Route element={<RequireAuth allowedRoles={[user, premium, admin]} />} >

                    <Route path='/books' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/detail/:productId' element={<ItemDetailContainer />} />

                    <Route element={<RequireAuth allowedRoles={[user, premium]} />} >
                      <Route path='/cart' element={<Cart />} />
                      <Route path='/checkout' element={<CheckoutContainer />} />
                    </Route>
                  </Route>

                  
                  <Route path='*' element={ <h2>404 NOT FOUND</h2> } />
                </Routes>
            </main>
            <footer>
              <Footer />
            </footer>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
