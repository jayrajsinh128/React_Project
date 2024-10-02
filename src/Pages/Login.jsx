// import '../assets/Styles/Login.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchapi } from '../Redux/Login/action'
import './login.css'

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const { data, isLoding, isError } = useSelector((s) => s.loginreducer)

  // console.log(value)
  const [state, setState] = useState({
    email: "",
    password: ""
  })


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetchapi(dispatch,state.email)
    dispatch(fetchapi)(state)
    setState({
      email: "",
      password: ""
    })

    useEffect(() => {
      if (data && !isError && !isLoding) {
        navigate("/product");
      }
    }, [data, isLoding, isError])
  }

  return (

    <div>
      <div className="form">
        <div className="wrapper">
          <header>Login Form</header>
          <form onSubmit={handleSubmit}>
            <div className="field email">
              <div className="input-area">
                <input type="text" placeholder="Email Address" value={state.email} name='email' onChange={handleChange} />
                <i className="icon fas fa-envelope"></i>
                <i className="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div className="error error-txt">Email can't be blank</div>
            </div>
            <div className="field password">
              <div className="input-area">
                <input type="password" placeholder="Password" value={state.password} name='password' onChange={handleChange} />
                <i className="icon fas fa-lock"></i>
                <i className="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div className="error error-txt">Password can't be blank</div>
            </div>
            <div className="lg"><a href="#">Forgot password?</a></div>
            <input type="submit" value="Login" />

          </form>

          <Link className='link' to={'/signup'}>Create account:-Singup</Link>

        </div>
      </div>
    </div>
  )
}

export default Login
