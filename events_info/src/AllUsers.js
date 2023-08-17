import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from './UserCard';
import axios from 'axios';
import MainNav from "./MainNav";


let Users = [
  {
    Id :"1",
    Name : "varsha t n",
    Phonenumber : "9876543210",
    Emailid : "varsha@gmail.com",
  }
]

export default function AllUsers() {
  const props = useLocation().state;
  let [Users, setUsers] = useState([]);
  const EventId = localStorage.getItem("event_id");
  const UserId = localStorage.getItem("user_id");

  let fetchData = async () => {
    let results;
    await axios
      .get("http://localhost:3000/user")
      .then((item) => {
        results=item.data;
      })
      .catch((error) => {
        console.log(error);
      });
      if (results != null) {
        setUsers(results);
      }
  };

  useEffect(() => { fetchData(); }, []);


  return (
    <div>
      <MainNav/>
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mt-5">
        {Users.map((user) => {
          localStorage.setItem("temp_data",user._id);
          const Temp=localStorage.getItem("temp_data");
          if(UserId!==Temp){
          return (
            <Card
              Id={user._id}
              Name={user.Name}
              Phonenumber={user.Phonenumber}
              Emailid={user.Emailid}
            />
          );
          }
        })}
      </div>
      <div>
      </div>
    </div>
  )
}
