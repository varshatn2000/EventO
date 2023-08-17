import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav() {
    let logout = async () => {
        localStorage.clear();
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <b>
                <a className="navbar-brand" href="#">EventO</a>
                </b>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar navbar-brand navbar-dark bg-primary">
                    <b>
                    <Link to="/AllEvents">
                        <button className="btn btn-primary" type="button">All Events</button>
                    </Link>
                    <Link to="/MyInvitations">
                        <button className="btn btn-primary" type="button">Invitations</button>
                    </Link>
                    <Link to="/AddEvent">
                        <button className="btn btn-primary" type="button">Add Event</button>
                    </Link>
                    <Link to="/">
                        <button onClick={logout} className="btn btn-primary" type="button">Signout</button>
                    </Link>
                    </b>
                </div>
            </div>
            </div>
        </nav>
  </div>
  )
}
