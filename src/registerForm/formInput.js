import React, { useState } from "react";
import "./gegform.css";
const FormInputs = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    date: "",
    gender: "",
    degree: "",
    specialization: "",
    college: "",
    password: "",
    confirmPassword: "",
  });
  const selectOptions = [
    "B.Sc",
    "M.Sc",
    "BCA",
    "M.Tech",
    "M.E",
    "MCA",
    "B.E",
    "B.Tech",
  ];
  
  const RegisterErrorMessage = {
    userName: "*it should not be empty",
    email: "*Enter a valid email address",
    gender: "*it should not be empty",
    date: "*it should not be empty",
    degree: "*it should not be empty",
    college: "*it should not be empty",
    specialization: "*it should not be empty",
    password: "*it should not be empty",
    confirmPassword: "*it should match to your password",
  };
 const [errMessage,setErrMessage] = useState({});
   const errmessage=()=>{
    let tempError={};
     for(const item in RegisterErrorMessage){
       if(values[item] <0 || values[item] === "")
       tempError[item] = RegisterErrorMessage[item];
     }
     setErrMessage(tempError);
  }



  const onchange = (e) => {
   
     setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    console.log(values)
    e.preventDefault();
    errmessage();
    if (values.password === values.confirmPassword) {
      console.log("match")
    } 
    if(values ===""){
      setValues("missing")
       console.log(values)
    } 
    else {
      console.log("password doesnt match");
    }
   
  };
  return (
    // <div className="mainCointainer">
     <div className="formContainer"> 
        <form  className="regisForm">
                  <h1>REGISTRATION</h1>
          {/* <label className="inputs">Name:</label> */}
          <input
            type="text"
            name="userName"
            placeholder="USER NAME"
            onChange={onchange}
            value={values.userName}
            className="inputBox"
            required
          /><br /> 
          <span className="errMsgRegister">{errMessage.userName}</span><br />  
          {/* <label className="inputs">E-mail:</label><br/> */}
          <input
            type="email"
            name="email"
            placeholder="USER E-MAIL"
            onChange={onchange}
            value={values.email}
            className="inputBox"
            required
          /><br />
          <span className="errMsgRegister">{errMessage.email}</span><br /> 
          {/* <label className="inputs">D.O.B:</label><br/> */}
          <input
            type="text"
            name="date"
            placeholder="DD-MM-YYYY"
            onChange={onchange}
            value={values.date}
            onBlur={(e)=>e.target.type="text"}
            onFocus={(e)=>e.target.type="date"}
            required
            className="inputBox"
          /><br />  
          <span className="errMsgRegister">{errMessage.date}</span><br />      
          <select onChange={onchange} name="gender" className="inputBox" required style={{width:"max-content",right:"23%"}}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Rather Not To Say</option>
          </select><br />
          <span className="errMsgRegister">{errMessage.gender}</span><br /> 
          {/* <label className="inputDegree">Degree:</label> */}
          <select
            onChange={onchange}
            className="inputBox"
            required
            name="degree"
          >
            <option value="">Degree</option>
            {selectOptions.map((item, ind) => (
              <option key={ind} value={item}>
                {item}
              </option>
            ))}
          </select><br/>     
          <span className="errMsgRegister">{errMessage.degree}</span><br />   
          <input
            type="text"
            name="specialization"
            className="inputBox"
            placeholder="SPECIALIZATION"
            value={values.specialization}
            required
            onChange={onchange}
          /> <br />    
          <span className="errMsgRegister">{errMessage.specialization}</span><br/>    
          {/* <label className="inputCollege">College:</label><br/> */}
          <input
            type="text"
            name="college"
            placeholder="YOUR COLLEGE NAME"
            onChange={onchange}
            value={values.college}
            className="inputBox"
            required
          /><br />
          <span className="errMsgRegister">{errMessage.college}</span><br /> 
          {/* <label className="inputPassword">Password:</label><br/> */}
          <input
            type="password"
            name="password"
            onChange={onchange}
            className="inputBox"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            placeholder="SET PASSWORD"
            required
          /><br />
          <span className="errMsgRegister">{errMessage.password}</span><br />
          {/* <label className="inputconfirmPass">Confirm-Password:</label><br/> */}
          <input
            type="text"
            name="confirmPassword"
            onChange={onchange}
            className="inputBox"
            placeholder="CONFIRM-PASSWORD"
            required
          /><br /> 
          <span className="errMsgRegister">{errMessage.confirmPassword}</span><br /> 
          <label className="termsPolicy">
            <input type="checkbox" required className="checkBoxTerms"/>
            Terms & Policy
          </label>
          <label
            id="termPolicy"
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            
            }}
          >
            <input type="checkbox" />?
            <p className="terms">
              Your E-mail will be used for Login Process and it will be your
              User Name,after Registration we will collect your information for
              Certificate generation Your E-mail will be used for Login Process
              and it will be your User Name,after Registration we will collect
              your information for Certificate generation
            </p>
          </label>
<br/>
          <input type="submit" className="submitButton" onClick={(e)=>handleClick(e)} 
            />
        </form>
      </div>
    // </div>
  );
};

export default FormInputs;
