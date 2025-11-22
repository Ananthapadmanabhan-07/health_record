import React from 'react'

function Login() {


  return (
    <div className="d-flex row align-items-center">
      <div style={{textAlign:'center',backgroundColor:"gray"}}><h1>Log In</h1></div>
      <div>
        <form>
          <div>
            <label htmlFor="username" style={{}}>Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login

