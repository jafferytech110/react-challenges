import React from 'react'
import profileImg from '../images/minion.jpg'

const Header = ({light, setLight}) => {

  return (
    <header>
        <nav>
            <div className='header-profile'>
                <img src={profileImg} alt="profile" />
            </div>

            <ul>
                <li>Home</li>
                <li>Work</li>
                <li>About</li>
            </ul>
            <div className={light ? 'light-mode' : 'dark-mode'} onClick={()=>{
                setLight((prev)=>!prev)
            }}>
            </div>
        </nav>
    </header>
  )
}

export default Header