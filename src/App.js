import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 className='text-center text-warning p-4 mt-4 mb-0'>Car Shop</h1>
      <Shop></Shop>
    </div>
  );
}

export default App;
