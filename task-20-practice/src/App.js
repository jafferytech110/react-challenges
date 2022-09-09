import { useState } from 'react';
import './App.css';
import FormInput from './FormInput';

function App() {
  const [values, setValues] = useState({
    username:'',
    email:'',
    fullname:''
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'username',
      errorMessage: 'username should be at least 3 to 20  characters long and no special character please.',
      pattern: "^[A-Za-z0-9]{5,20}$",
      label:'Username',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      errorMessage: 'valid email address please.',
      label:'email',
      required: true
    },
    {
      id: 3,
      name: 'fullname',
      type: 'text',
      placeholder: 'Full Name',
      errorMessage: 'full name cannot be less than 2 character, no numbers and special characters please.',
      label:'Full Name',
      pattern: "^[A-Za-z]([-']?[A-Za-z]+)*( [A-Za-z]([-']?[A-Za-z]+)*)+$",
      required: true
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  console.log(values)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
