import './App.css';
import Skills from './components/Skills';
import profileImg from './images/minion.jpg'

function App() {
  const userSkills = ['HTML','CSS','Sass','JS','React','React','Redux','Node','MongoDB','Python','Flask','Numpy','Data Analysis','MYSQL','GraphQL','D3.js','Gatsby','Docker','Heroku','Git']
  return (
    <main>
      <header>
        <img src={profileImg} alt="profile" />
        <h1>Minion Khan</h1>
        <p>Senior Developer, Pakistan</p>
      </header>
      <Skills userSkills={userSkills}/>  
      <p>&copy; Joined on Aug 30, 2020</p>
    </main>
    );
}

export default App;
