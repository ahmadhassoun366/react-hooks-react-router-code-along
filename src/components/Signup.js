import React from 'react'

function Signup() {
    return(
        <div>
          <form>
            <div>
              <input type='text' name='username' placeholder='Username'/>
              <label htmlFor='username'> Create a Username</label>
            </div>
            <div>
              <input type='password' name='password' placeholder='Password'/>
              <label htmlFor='password'> Create a Password </label>
            </div>
            <input type='submit' value='Signup'/>
          </form>
        </div>
    )
}

export default Signup