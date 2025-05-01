import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/auth/authOperations'
import { selectToken } from '../../redux/auth/authSelectors'

export default function LoginPage() {
  const dispatch = useDispatch()
  const selectLogin = useSelector(selectToken)

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(login({email,password}))
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" name='login' value={email} placeholder='mailinizi giriniz' onChange={(e)=>setEmail(e.target.value)}  />
      <input type="password" name="password" value={password} placeholder='parolayı giriniz' onChange={(e)=>setPassword(e.target.value)} />
      <button type='submit' >Giriş yap</button>
    </form>
    
    </>
  )
}
