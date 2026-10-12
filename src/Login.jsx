import { useState } from "react"
import axios from 'axios'


function Login() {
    const [login, setLogin] = useState({ username: '', password: '' })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogout = () => {
        setIsLoggedIn(!isLoggedIn)
        setLogin({
            username: "",
            password: ""
        })
    }

    const handleSubmit = (event) => {
        axios.post('http://localhost:3000/users', login).then(response => {
            setIsLoggedIn(true)
        })
        event.preventDefault()
    }
    const handleLogin = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value })
    }
    if (!isLoggedIn) {
        return (

            <>
                <form onSubmit={handleSubmit}>
                    <h4 className="mb-3">Login Form</h4>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input className="form-control" name="username" value={login.username} onChange={handleLogin} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" name="password" type="password" value={login.password} onChange={handleLogin} />
                    </div>
                    <button className="btn btn-outline-primary">Login</button>
                </form>
            </>
        )
    }
    else {
        return (
            <>
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                <h4 className="text-primary"> Welcome, {login.username}</h4>

            </>
        )
    }
}

export default Login