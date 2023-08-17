import { React, useEffect, useState } from "react";
import './app.scss'
import axios from 'axios';
import MainNav from "./MainNav";

let Invitations = [
  {
    Id :"1",
    EventId :"1",
    EventTitle :"Lets C",
    UserId :"1",
    Status :true
  }
]

export default function MyInvitations() {
  const UserId = localStorage.getItem("user_id");
    let [Invitations, setInvitations] = useState([]);


  let fetchData = async () => {
    let results;
    await axios
        .get("http://localhost:3000/invitation")
        .then((data) => {
          results = data.data.filter((data) => {
            return data.UserId === UserId && data.Status === false;
          })
        })
        .catch((err) => console.log(err));
        if (results != null) {
          setInvitations(results);
        }
        else{
          alert("No pending invitation");
        }
  }


    let deleteEntry = async (id) => {
      await axios
      .delete('http://localhost:3000/invitation/'+id)
      .catch((e)=>{console.log(e)})
    };
    
    let approveInvite = async (ID) => {
      await axios
      .put("http://localhost:3000/invitation/"+ID,{Status:true})
      .catch((error) => {
        console.log(error,"error");
      });

  };

     useEffect(() => {
       fetchData(); 
      }, []);

  return (
  <div>
    <MainNav/>
    <div className="container py-5 h-custom">
      {
          Invitations.map((invite)=>{
            return (
                <div key={invite._id} className="d-flex align-items-center justify-content-center pb-4 mt-4" id="block">
                    <div className="col mb-4 mt-4"><b>{invite.EventTitle}</b></div>
                    <div className="col mb-4 mt-4">
                        <button onClick={()=>approveInvite(invite._id)} className="fw-bold btn btn-outline-success mx-5" >Approve</button>
                        <button onClick={()=>deleteEntry(invite._id)} className="fw-bold btn btn-outline-danger mx-5" >Decline</button>
                    </div>
                </div>)
                } )
            }
    </div>
  </div>
  )
}