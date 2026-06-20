import { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login Done!')
    setFormData({ email: '', password: '' })
  }
  
  return (
    <div style={{padding: '50px', textAlign: 'center'}}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{padding: '10px', margin: '10px'}} />
        <br/>
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} style={{padding: '10px', margin: '10px'}} />
        <br/>
        <button type="submit" style={{padding: '10px 20px', margin: '10px'}}>Login</button>
      </form>
    </div>
  )
}

export default Login