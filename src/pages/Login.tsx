import React, { useState } from "react"
import { observer } from 'mobx-react'
import styled from "styled-components";

export const Login = observer((props: { onFormSwitch: (arg0: string) => void; }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log('Email: ', email)
    }
return(
    <FormWrapper>
    <form onSubmit={handleSubmit}>
        <label htmlFor={'email'}>email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'youremail@gmail.com'} id={'email'} name={'email'} />
        <label htmlFor={'password'}>password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type={'password'} placeholder={'*****'} id={'password'} name={'password'} />
        <button type='submit'> Log In</button>
    </form>
        <button onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here. </button>
    </FormWrapper>

)})

const FormWrapper = styled.div`
border: #282c34;
`

