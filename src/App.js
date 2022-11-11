import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
