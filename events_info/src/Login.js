import React from 'react'
import './app.scss'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  let [Emailid, setEmailid] = useState("");
  let [Password, setPassword] = useState("");

  let submit = async () => {
    let results;
      await axios
        .get("http://localhost:3000/user")
        .then((data) => {
          results = data.data;
        })
        .catch((err) => console.log(err));

        let doesMatch_user = results.filter((data) => {
          if(Emailid !== null && Password !== null){
            return data.Emailid === Emailid && data.Password === Password;
          }
        });
        if (doesMatch_user.length !== 0) {
          localStorage.setItem("user_id",doesMatch_user[0]._id);
          navigate("/AllEvents");
        }
        else {
          console.log("Incorrect credentials");
          alert("Incorrect credentials");
          navigate('/');
        }
    };
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid" alt="Phone image"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h1 className="fw-bold text-center mb-5">Sign into your account</h1>
              <form>
                <div className="form-outline mb-4">
                <input type="email" onChange={(e)=>setEmailid(e.target.value)} value={Emailid} className="form-control form-control-lg" placeholder="Enter a valid email address" name="Email"/>
                </div>
                <div className="form-outline mb-4">
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={Password} className="form-control form-control-lg" placeholder="Enter password" name="Password"/>
                </div>
                <button type="button" onClick={submit} className="fw-bold btn btn-primary btn-lg form-control">Sign in</button>

                {/*<a href="#!" className="d-flex justify-content-around align-items-center mt-4">Forgot password?</a>*/}

                <div className="d-flex align-items-center justify-content-center pb-4 mt-4">
                  <p className="fw-bold mb-0 me-3">Don't have an account ?</p>
                  <Link to='/AddUser'>
                    <button type="button" className="fw-bold btn btn-outline-info">Create new</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
