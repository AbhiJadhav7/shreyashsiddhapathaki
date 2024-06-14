import React, { useState } from "react";
import blur11 from "../assets/blur11.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: " ",
  });
  let name, value;
  const postFormData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const {name,email,contact} = formData
    if(name && email && contact){
    const res = await fetch(
      "https://shreyassiddhapathaki-default-rtdb.firebaseio.com/formDataRecords.json",{
      method:"POST",
      Headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,contact
      })
    });
    if(res){
      setFormData({name:"",email:"",contact:""})
      alert("Submitted Successfully");
    }else{
      alert("please fill the data.");
    }
  }else{
    alert("Please fill data.")
  }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="contact">
        <img className="blur11" src={blur11} alt="" />
        <div className="aboutbg">
          <form method="POST" className="contactcontainer">
            <div className="contactcontent">
              <div className="contactname">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={postFormData}
                  name="name"
                />
              </div>
              <div className="contactform">
                <div className="email">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={postFormData}
                    name="email"
                  />
                </div>
                <div className="numbers">
                  <input
                    type="number"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={postFormData}
                    name="contact"
                  />
                </div>
              </div>
              <div className="bookacall">
                <button type="submit" onClick={submitData}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
