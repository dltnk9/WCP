import React, { useState, useEffect } from "react";
import styles from './App.css';



function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count +1);
  }
  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
    .then((response) => response.json())
    .then((data) => setUser(data));
  }, [count]);

  return (
   

  <div className='App'>
    
    <h1 className="title" > WCP User Database</h1><br/><button className="subtitle" onClick={onClick}>Fetch 10 Users</button><br/>
    {user?.map((user) => (
      <div key={user.id} className="card">
        <div className="inner"> 
        <div className="front">
      <div><img className="img" src={user.avatar}></img><br/> {user.first_name}<br/>{user.last_name}<p>{user.employment.title}</p></div>
     
      </div>
      <div className="back">User Name: {user.username}<br></br><a href='mailto:MAIL_ADDRESS'>Email : {user.email}</a><br></br>Gender : {user.gender}<br></br>Phone Number : {user.phone_number}
<br/>Date of Birth : {user.date_of_birth}<br/>Key Skill : {user.employment.key_skill}<br/><div className="address"> Address : {user.address.city} {user.address.street_name} <br/>{user.address.street_address} {user.address.zip_code} {user.address.state}<br/>{user.address.country}</div></div>
        </div>
        </div>
    ))}
  </div>
  );
  
}
export default App;