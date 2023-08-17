import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import MainNav from './MainNav'

export default function AddEvent() {

    let [EventTitle,setEventTitle]=useState("")
    let [Description,setDescription]=useState("")
    let [Destination,setDestination]=useState("")
    let [Date,setDate]=useState("")
    let [StartTime,setStartTime]=useState("")
    let [EndTime,setEndTime]=useState("")
    let [MobileNo,setMobileNo]=useState("")
    let submit=async(e)=>{ 
        const UserId = localStorage.getItem("user_id");
        await axios.post("http://localhost:3000/event",
        {
            EventTitle:EventTitle,Description:Description,
            Destination:Destination,MobileNo:MobileNo,
            Date:Date,StartTime:StartTime,EndTime:EndTime
        }).catch((e)=>{console.log(e)})
        localStorage.setItem("event_title",EventTitle);


        let result;
        await axios
            .get('http://localhost:3000/event')
            .then((data)=>{
              result = data.data.filter((item) => {
                    return item.EventTitle===EventTitle;
              })
            }).catch((e)=>{console.log(e)})
            
            if (result != null) {
                localStorage.setItem("event_id",result[0]._id);
              }
        
        
        const EventId = localStorage.getItem("event_id");
        await axios.post("http://localhost:3000/invitation",
        {
            UserId:UserId,EventId:EventId,EventTitle:EventTitle,Status:true
        }).catch((e)=>{console.log(e)})
    }

  return (
    <div>
        <MainNav/>
        <section className="vh-100" id="background">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-7">
                    <div className="card">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <form>

                                <h2 className="fw-bold text-center mb-5">Add an event</h2>
                                <input type="text" onChange={(e)=>setEventTitle(e.target.value)} value={EventTitle} className="form-control form-control-lg mb-4" placeholder="Enter name of the event"/>
                                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description} className="form-control form-control-lg mb-4" placeholder="Enter type of event"/>
                                <input type="text" onChange={(e)=>setDestination(e.target.value)} value={Destination} className="form-control form-control-lg mb-4" placeholder="Event conducting destination"/>
                                <input type="date" onChange={(e)=>setDate(e.target.value)} value={Date} className="form-control form-control-lg v" placeholder="Date of event"/>
                                <div className="row mt-4">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                        <input type="time" onChange={(e)=>setStartTime(e.target.value)} value={StartTime} className="form-control form-control-lg" placeholder="Starting time"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                        <input type="time" onChange={(e)=>setEndTime(e.target.value)} value={EndTime} className="form-control form-control-lg" placeholder="Ending time"/>
                                        </div>
                                    </div>
                                </div>
                                <input type="tel" onChange={(e)=>setMobileNo(e.target.value)} value={MobileNo} className="form-control form-control-lg mb-4" placeholder="Contact number"/>                                   
                                <button onClick={submit} className="fw-bold btn btn-primary btn-lg form-control" type="button">Submit</button>
                                <div className="d-flex align-items-center justify-content-center pb-4 mt-4">
                                    <p className="fw-bold mb-0 me-3">Invite your friend ?</p>
                                    <Link to='/AllUsers'>
                                        <button type="button" className="fw-bold btn btn-outline-info">Collaborate</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
