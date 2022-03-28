import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault()
        // fetch("https://localhost:5000/api/auth/login")

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json)

        if (json.success) {
            //    save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/")


        }
        else {
            alert("Invalid credentials");
        }

    }
    const onChange = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value })


    }
    return (
        <div>
            <form className='container' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} id="password" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login