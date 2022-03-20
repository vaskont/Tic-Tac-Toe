/* eslint-disable react/prop-types */
import React from 'react';

import './login_start.css';

const LoginStart = ({ update, submit }) => (
    <div className='login'>
        <label>Please enter your name: 
            <input name='name' id='name' onChange={({ target }) => update(target)}/>
            <input type='submit' name='button' onClick={submit} />
        </label>
    </div>
);

export default LoginStart;