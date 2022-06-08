import React, { memo } from 'react'

const Signup = () => {
    console.log('hello i am Signup page');
  return (
    <div className='signup'>
        <div className="signupContent container">
            <h2>create an account</h2>
            <div className="inputs">
                <input type="text" placeholder='first name'/>
                <input type="text" placeholder='last name'/>
            </div>
            <div className="inputs">
                <input type="text" placeholder='username name'/>
                <input type="email" placeholder='email'/>
            </div>
            <div className="inputs">
                <input type="passsword" placeholder='passsword'/>
                <input type="passsword" placeholder='confirm passsword'/>
            </div>
            <p>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <br/><b>PRIVACY POLICY</b>
            </p>
            <button>create</button>
        </div>
    </div>
  )
}

export default memo(Signup)