import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <h1>JafferyTech Bank</h1>
        <Shop />
      </div>
    </div>
  );
}

export default App;
