import React from 'react';
import './login.css'


const Login = () => {    

    const handleChange = () => {
    }

    const handleClick = () => {}
    
    return (
        <div className="login">
          <div className="lContainer">
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
            <button onClick={handleClick} className="lButton">
              Login
            </button>
            {/* {error && <span>{error.message}</span>} */}
          </div>
        </div>
  )
}

export default Login