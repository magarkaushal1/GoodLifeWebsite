import React from 'react';
// import axios from 'axios'
import { useState } from 'react';
import Alert from '../components/Alert'
import ErrorText from '../components/ErrorText';
import { useDispatch } from 'react-redux';
import { FaSignInAlt, } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [show_spinner, setShowSpinner] = useState(false)

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault()
        setShowSpinner(true)
        let { password, email } = data

        // axios.post(`http://127.0.0.1:3000/api/login`, {
        //     password,
        //     email
        // })

        //     .then(function (response) {
        //         console.log({ response })
        //         localStorage.setItem("access_token", response.data.access_token)
        //         dispatch(setUserStore(response.data))
        //         navigate("/")

        //     })
        //     .catch(function (error) {
        //         setErrors({
        //             status: "danger",
        //             msg: error?.response?.data?.msg
        //         })

        //     })

    }


    function handleChange(e) {

        const { name, value } = e.target
        console.log("result", name, value);
        setData({
            ...data,
            [name]: value
        })
        setErrors({
            ...errors,
            [name]: "",
        })

    }



    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center 
                     text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder ">
                            Hello!
                        </h1>
                        <p className="lead text-center">

                            Enter Your Credentials To Login
                        </p>
                        <h5 className="mb-4 text-white">OR</h5>
                        <NavLink to="/login" className="btn btn-light  text-primary rounded-pill pb-2 w-50">
                            <i><FaSignInAlt /> </i>
                            Signup
                        </NavLink>
                    </div>

                    <div className="col-md-6 p-5 ">
                        <section id="Login">
                            <h1 className="display-6 fw-bolder mb-5 text-center shadow my-5">
                                Login</h1>
                            <p className="text-base text-gray-100 font-thin leading-normal my-2">
                            </p>
                        </section>

                        <form onSubmit={handleSubmit}>
                            {
                                errors.msg && errors.status
                                &&
                                <Alert
                                    errors={errors}
                                />
                            }
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label required">Email</label>
                                <input type="email" className="form-control" name="email" value={data.email}
                                    onChange={handleChange} aria-describedby="emailHelp" />
                                <ErrorText errors={errors}
                                    field="email" data={data} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label required">Password</label>
                                <input type="password" className="form-control" name="password"
                                    onChange={handleChange}
                                    aria-describedby="emailHelp" />
                                <ErrorText errors={errors}
                                    field="password" data={data}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" onChange={handleChange} className="form-check-input" name="is_checked"
                                    id="is_checked" checked={data.is_checked} />
                                <label className="form-check-label" htmlFor="is_checked">Accepted Condition</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

