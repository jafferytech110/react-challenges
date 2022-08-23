import './App.css';
import Parent from './components/Parent';
import Child from './components/Child'

function App() {
  return (
    <>
    <header>
      <h1>Task 7</h1>
      <h2>Children inside parent component</h2>
    </header>
    <main>
      <Parent>
        <Child />
      </Parent>
    </main>
    </>
  );
}

export default App;
