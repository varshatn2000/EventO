import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from './EventCard';
import axios from 'axios';
import MainNav from "./MainNav";

let Events = [
  {
    Id :"1",
    EventTitle : "LetsC",
    Date : "2023-08-20",
    Destination : "gcek",
    StartTime : "10:00",
    EndTime : "12:00",
    MobileNo : "9567238941",
  }
]

export default function AllEvents() {
  const props = useLocation().state;
  let [Events, setEvents] = useState([]);
  const UserId = localStorage.getItem("user_id");

  let fetchData = async () => {
    let results;
    await axios
    .get('http://localhost:3000/event')
    .then((item)=>{
      results = item.data;
    })
    .catch((e)=>{console.log(e)})
    if (results != null) {
      setEvents(results);
    }
  }

   useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <MainNav/>
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mt-5">
        {Events.map((event) => {
          return (
            <Card
              Id={event._id}
              EventTitle={event.EventTitle}
              Destination={event.Destination}
              Date={event.Date}
              StartTime={event.StartTime}
              EndTime={event.EndTime}
              MobileNo={event.MobileNo}
            />
          );
        })}
      </div>
    </div>
  )
}
