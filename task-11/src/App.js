import './App.css';
import htmlImg from './images/HTML5_Badge_512.png'
import cssImg from './images/CSS3_logo.svg.png'
import jsImg from './images/javascript-39397.png'
import reactImg from './logo.svg'

function App() {
  return (
    <>
      <h1>Front End Technologies</h1>
      <main>
        <img src={htmlImg} alt='html5 Logo' />
        <img src={cssImg} alt='css Logo' />
        <img src={jsImg} alt='js Logo' />
        <img src={reactImg} alt='react Logo' />
      </main>
    </>
  );
}

export default App;
