import React from 'react'
import './app.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function AddUser() {
    let [Name,setName]=useState("")
    let [Phonenumber,setPhonenumber]=useState("")
    let [Emailid,setEmailid]=useState("")
    let [Password,setPassword]=useState("")
    let submit=async(e)=>{ 
        await axios.post("http://localhost:3000/user",
        {
          Name:Name,Phonenumber:Phonenumber,
          Emailid:Emailid,Password:Password
        })
      }

  return (
    <div>
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid" alt="Writing image"/>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <h1 className="fw-bold text-center mb-5">Create an account</h1>
                    <form>
                        <div className="form-outline">
                            <input type="text" id="Name" onChange={(e)=>setName(e.target.value)} value={Name} className="form-control form-control-lg mb-4" placeholder="Enter your name" required/>
                            <input type="tel" id="Phonenumber" onChange={(e)=>setPhonenumber(e.target.value)} value={Phonenumber} className="form-control form-control-lg mb-4" placeholder="Enter a valid phone number" />
                            <input type="email" id="Emailid" onChange={(e)=>setEmailid(e.target.value)} value={Emailid} className="form-control form-control-lg mb-4" placeholder="Enter a valid email address" required/>
                            <input type="text" id="Password" onChange={(e)=>setPassword(e.target.value)} value={Password} className="form-control form-control-lg mb-4" placeholder="Enter password" required/>
                        </div>
                        <Link to='/'>
                        <button type="button" className="fw-bold btn btn-primary btn-lg form-control" onClick={submit}>Sign up</button>
                        </Link>
                    </form>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
