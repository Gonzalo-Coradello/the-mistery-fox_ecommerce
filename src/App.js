import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/NotificationService';

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
                  <Route path='/' element={<ItemListContainer />} />
                  <Route path='/category/:categoryId' element={<ItemListContainer />} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                  <Route path='/cart' element={<Cart />} />
                  {/* <Route path='/checkout' element={<CheckoutContainer />} /> */}
                  <Route path='*' element={ <h2>404 NOT FOUND</h2> } />
                </Routes>
            </main>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
