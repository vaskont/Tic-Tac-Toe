/* eslint-disable react/prop-types */
import React from 'react';

import './login_change.css';

const LoginChange = ({ name, update, submit }) => (
    <div className='login'>
        <span>Hello, {name}</span>
        <input type='text' name='name' size='15' onChange={({ target }) => update(target)}/>
        <button onClick={submit} >Change name</button>
    </div>
);

export default LoginChange;