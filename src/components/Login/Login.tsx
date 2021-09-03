import React from "react";

const Login = () => {
  return (
    
    <div className="login-box">
      <div className="title">Time To School</div>
      <div className="sub-title">Login to Parent-Student Portal</div>
     
      <form>
      <div className="form-floating">
        <input          
          className="form-control text"         
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Parent Email-Id/Student Id</label>
      </div>

      <div className="form-floating">
        <input          
          className="form-control text"         
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Password</label>
      </div>

      
     
      </form>
      <div className="d-grid mb-2">
          <button className="btn login d-block">Login</button>
      </div>
      <div >
      <a href="#" className="fw-bold">Forgot Password?</a> <br />
        First Time User? Please  <a href="#" className="fw-bold">Sign-Up</a> 
      </div>
    </div>
  );
};

export default Login;
