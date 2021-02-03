import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [empty, setempty] = useState();
  const [emptyfname, setemptyfname] = useState();
  const [emptylname, setemptylname] = useState();
  const [emptygender, setemptygender] = useState();
  const [emptyadd, setemptyadd] = useState();
  const [emptynum, setemptynum] = useState();
  const [flag, setflag] = useState(false);

  const [form, setform] = useState([]);
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    form == "" && setempty("Empty field");
    form.fname == "" && setemptyfname("Empty firstname field") || 
    form.lname == "" && setemptylname("Empty lastname field") || 
    form.gender == "" && setemptygender("Empty gender field") || 
    form.address == "" && setemptyadd("Empty address field") ||
    form.num == "" && setemptynum("Empty number field")|| !Number(form.num) && setemptynum("Please enter number") || setflag(true)
    if(flag==true){
      alert("Registered")
      setemptynum()
      setemptyfname()
      setemptylname()
      setemptygender()
      setemptynum()
    }
  };

  let handlChange = (e) => {
    setform({ ...form, [e.target.name]: [e.target.value] });
  };
  return (
    <div className="main">
      <div className="Main-container">
        <form onSubmit={handleSubmit}>
          <h1>Register Your Account</h1>
          <div className="textbox">
            <label>First Name</label>
            <input type="text" name="fname" onChange={handlChange} />
          </div>
          {empty ? (
            <p className="danger">{empty}</p>
          ) : emptyfname ? (
            <p className="danger">{emptyfname}</p>
          ) : null}
          <div className="textbox">
            <label>Last Name</label>
            <input type="text" name="lname" onChange={handlChange} />
          </div>
          {empty ? (
            <p className="danger">{empty}</p>
          ) : emptylname ? (
            <p className="danger">{emptylname}</p>
          ) : null}
          <div className="radio">
            <label>Gender:</label>
            <label>Male</label>
            <input type="radio" name="gender" onChange={handlChange} />
            <label>Female</label>
            <input type="radio" nmae="gender" onChange={handlChange} />
          </div>
          {empty ? (
            <p className="danger">{empty}</p>
          ) : emptygender ? (
            <p className="danger">{emptygender}</p>
          ) : null}
          <div className="textbox">
            <label>Address</label>
            <input type="text" name="address" onChange={handlChange} />
          </div>
          {empty ? <p>{empty}</p> : emptyadd ? <p>{emptyadd}</p> : null}
          <div className="textbox">
            <label>Phone Number</label>
            <input type="text" name="num" onChange={handlChange} />
          </div>
          {empty ? (
            <p className="danger">{empty}</p>
          ) : emptynum ? (
            <p className="danger">{emptynum}</p>
          ) : null}
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}
