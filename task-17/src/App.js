import './App.css';
import {countriesData} from './data/countries'
import {useState} from 'react'

function App() {

  const [country, setCountry] = useState(countriesData[0])
  const surpriseMe = () => {
    const randomNum = Math.floor(Math.random() * (countriesData.length - 1))
    setCountry(countriesData[randomNum])
  }

  return (
    <>
      <div className='card'>
        <div className='card-flag'>
          <img src={country.flag} alt={`${country.name} flag`} />
          <h1 className='country-name'>{country.name}</h1>
        </div>
        <div className='card-detail'>
          <p className='card-detail-stat'>
            <span>Capital: </span>
            {country.capital}
          </p>
          <p className='card-detail-stat'>
            <span>{country.languages.length > 1 ? 'Langauges: ' : 'Language: '} </span>
            {country.languages.map((lang) => {
              return (
                `${lang}, `
              )
            })}
          </p>
          <p className='card-detail-stat'>
            <span>population: </span>
            {country.population}
          </p>
          <p className='card-detail-stat'>
            <span>currency: </span>
            {country.currency}
          </p>
        </div>
        <div>
          <button onClick={surpriseMe}>Select Country</button>
        </div>
      </div>
    </> 
  );
}

export default App;
