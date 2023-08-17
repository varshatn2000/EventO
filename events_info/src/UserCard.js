import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function UserCard({Id,Name,Phonenumber,Emailid}) {
  const UserId = localStorage.getItem("user_id");
  const EventId = localStorage.getItem("event_id");
  const EventTitle = localStorage.getItem("event_title");
  let submit=async(e)=>{ 
    localStorage.setItem("Friend",Id);
    const Friend = localStorage.getItem("Friend");
      await axios.post("http://localhost:3000/invitation",
      {
        UserId:Friend,EventId:EventId,EventTitle:EventTitle,Status:false
      }).catch((e)=>{console.log(e)})
      localStorage.setItem("Friend",null);
  }

  return (
    <div className='container shadow card-cont mb-3 mx-3' id="profile-card">
        <div className="text-center mt-4">
          <h3 className="doctor-card-name">{Name}</h3>
          <h6 className="profile-card-dept mt-2">{Phonenumber}</h6>
          <h6 className="profile-card-exp mb-4">{Emailid}</h6>
          <Link to='/AllUsers'>
            <button onClick={submit} className="btn btn-outline-primary btn-lg" type="submit">Invite</button>
          </Link>
        </div>
    </div>
  )
}
