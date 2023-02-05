import React, {useState} from "react"
import { observer } from 'mobx-react'
import styled from "styled-components";

export const Register = observer(() => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log('Name: ', name)
    }
return(
    <FormWrapper>
    <form onSubmit={handleSubmit}>
        <label htmlFor={'name'}>Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type={'name'} placeholder={'e.g Santa Claus'} id={'name'} name={'name'} />
        <label htmlFor={'email'}>email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'youremail@gmail.com'} id={'email'} name={'email'} />
        <label htmlFor={'password'}>password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type={'password'} placeholder={'*****'} id={'password'} name={'password'} />
        <button type='submit'> Register your details. </button>
    </form>
        <button> Already have an account? Login here. </button>
    </FormWrapper>

)})

const FormWrapper = styled.div`
border: #282c34;
`