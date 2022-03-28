import React, { useState } from "react"
import { useHistory } from "react-router"

const Signup = () => {


    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json()
        console.log(json)

        if (json.success) {
            // save the auth token and redirect 
            localStorage.setItem('token', json.authtoken);
            history.push("/")

        }
        else {
            alert("invalid credential");
        }


    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" onChange={onChange}>Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} autoComplete="on" minLength={5} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} autoComplete="on" required />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Signup