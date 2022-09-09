import './App.css';
import {FaUserAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {AiFillCreditCard} from 'react-icons/ai'
import {VscGistSecret} from 'react-icons/vsc'
import {GrValidate} from 'react-icons/gr'

function App() {

  return (
  <>
  <h1>Sign up</h1>
  <form className='form'>
    {/* account */}
    <div className='form-account'>
      <h2>Account</h2>
      <div className="form-account-items">
        <div>
        <label htmlFor="fullName"><FaUserAlt /></label>
        <input type="text" name='fullname' placeholder='Full Name' />
        </div>
        <div>
        <label htmlFor="email"><MdEmail /></label>
        <input type="email" name='email' placeholder='Email Address' />
        </div>
        <div>
        <label htmlFor="password"><RiLockPasswordFill /></label>
        <input type="password" name='password' placeholder='Password' />
        </div>
      </div>
    </div>  
    {/* date of birth & Gender */}
    <div className="date-gender">
      <div className="birthdate">
        <h2>Date of Birth</h2>
        <input type="text" placeholder='DD' />
        <input type="text" placeholder='MM' />
        <input type="text" placeholder='YYYY' />
      </div>
      <div className="gender">
        <h2>Gender</h2>
        <div>
        <div>
        <input type="radio" name='gender' value="Male" id='male'/>
        <label htmlFor='male'>Male</label>
        </div>
        <div>
        <input type="radio" name='gender' value="Female" id='female'/>
        <label htmlFor="female">Female</label>
        </div>
        </div>
      </div>
    </div>
    <div className="payment">
      <h2>Payment Details</h2>
        <div className="payment-detail">
          <input type="radio" name='payment' value="creaitCard" id='creditCard'/>
          <label htmlFor='creditCard'>Credit Card</label>
          <input type="radio" name='payment' value="paypal" id='paypal'/>
          <label htmlFor="paypal">Paypal</label>
        </div>
        <div className="payment-card-detail">
          <div>
            <label htmlFor="cardNumber"><AiFillCreditCard /></label>
            <input type="text" name='cardNumber' id='cardNumber' placeholder='Card Number' />
          </div>
          <div>
            <div>
              <label htmlFor="cvc"><VscGistSecret /></label>
              <input type="text" name='cvc' id='cvc' placeholder='Card CVC' />
            </div>
            <div>
              <label htmlFor="cardExpiry"><GrValidate /></label>
              <input type="text" name='cardExpiry' id='cardExpiry' placeholder='MM/YY' />
            </div>
          </div>
        </div>
    </div>
    <button type='submit'>Submit</button>
  </form>  
  </>
  );
}

export default App;
