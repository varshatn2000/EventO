import { React }from 'react'

export default function EventCard({Id,EventTitle,Destination,Date,StartTime,EndTime,MobileNo}) {
    return (
    <div className='container shadow card-cont mb-3 mx-3 mt-5' id="profile-card">
        <div className="text-center mt-4">
            <h3 className="doctor-card-name">{EventTitle}</h3>
            <h6 className="profile-card-dept mt-2">at {Destination}</h6>
            <h6 className="profile-card-dept">{Date}</h6>
            <h6 className="profile-card-dept">{StartTime}</h6>
            <h6 className="profile-card-dept">{EndTime}</h6>
            <h6 className="profile-card-exp mb-4">{MobileNo}</h6>
            {/* <button className="btn btn-outline-primary btn-lg" type="submit">Collaborate</button> */}
        </div>
    </div>
  )
}
