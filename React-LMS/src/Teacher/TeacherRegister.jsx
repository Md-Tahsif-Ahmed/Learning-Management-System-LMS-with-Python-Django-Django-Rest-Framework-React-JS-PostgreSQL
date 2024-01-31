import { Link } from "react-router-dom";
// import useAxiosPublic from "../Hook/useAxiosPublic";
import axios from "axios";
import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
const TeacherRegister = () => {
  // const axiosPublic = useAxiosPublic();
  const baseUrl = 'http://127.0.0.1:8000/teacher/'
  const [teacherdata, setTeacherData] = useState({
      'full_name': '',
      'email': '',
      'password': '',
      'qualification': '',
      'mobile_no': '',
      'address': '',
      'skills': '',
      'status': 'success'
    });
 
  // Change Element Value
  const handleChange=(event)=>{
   
    setTeacherData({
      ...teacherdata,
      [event.target.name]:event.target.value
    })
  }
 
  // End of
  const submitForm = async ()=>{
    const teacherFormData = new FormData();
    teacherFormData.append("full_name", teacherdata.full_name)
    teacherFormData.append("email", teacherdata.email);
    teacherFormData.append("password", teacherdata.password)
    teacherFormData.append("qualification", teacherdata.qualification)
    teacherFormData.append("mobile_no", teacherdata.mobile_no)
    teacherFormData.append("address", teacherdata.address)
    teacherFormData.append("skills", teacherdata.skills)
    try {
      const response = await axios.post(baseUrl, teacherFormData);
      console.log(response.data);
      // Set success status or handle success as needed
    } catch (error) {
      console.error("Error during registration:", error);
      setTeacherData({ ...teacherdata, 'status': 'error' });
    }
    
  }
     
    //   const handleRegister = async (e) => {
    //     try {
    //       e.preventDefault();  
    
    //       const name = e.target.name.value;
    //       const email = e.target.email.value;
    //       const password = e.target.password.value;
    //       const qua = e.target.qua.value;
    //       const mobile = e.target.mobile.value;
    //       const add = e.target.add.value;
    //       const skills = e.target.skills.value;
    //       console.log(name, email, password, qua, mobile, add, skills);
    //       const regField = {name, email, password, qua, mobile, add, skills}
    
    //       const addReg = await axiosPublic.post('teacher', regField);
    //       console.log(addReg);
    //     } catch (error) {
    //         console.error("Error during registration:", error);
    //     }
    // };
    
     
    return (
        <div className="">
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-10">
          {teacherdata.status === 'success' && <p className="text-success">Thank you for Registration</p>}
          {teacherdata.status === 'error' && <p className="text-danger">Error during registration</p>}

            <div className="mt-10">
              <h1 className="text-2xl md:text-5xl font-bold">Register now!</h1>
            </div>
            <div className="w-1/2 bg-[#32cc8c] p-4 rounded-lg">
              <form  className="card-body">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Full Name</span>
                      </label>
                      <input 
                          value={teacherdata.full_name}
                          onChange={handleChange}
                          type="text" 
                          name="full_name" 
                          placeholder="Enter your Full Name" 
                          className="input input-bordered" required 
                      />
                  </div>
               
                   
                <div className="form-control">
                      <label className="label">
                      <span className="label-text">Email</span>
                      </label>
                      <input
                      value={teacherdata.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                      />
                  </div>
                  <div className="form-control">
                      <label className="label">
                      <span className="label-text">Password</span>
                      </label>
                      <input
                      value={teacherdata.password}
                      onChange={handleChange}
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input input-bordered"
                      required
                      />
                      
                  </div>
                  <div className="form-control">
                      <label className="label">
                      <span className="label-text">Qualification</span>
                      </label>
                      <input
                      value={teacherdata.qualification}
                      onChange={handleChange}
                      type="text"
                      name="qualification"
                      placeholder="Enter Qualification"
                      className="input input-bordered"
                      required
                      />
                      
                  </div>
                  <div className="form-control">
                      <label className="label">
                      <span className="label-text">Mobile No</span>
                      </label>
                      <input
                      value={teacherdata.mobile_no}
                      onChange={handleChange}
                      type="number"
                      name="mobile_no"
                      placeholder="Enter Mobile No"
                      className="input input-bordered"
                      required
                      />
                      
                  </div>
                  <div className="form-control">
                      <label className="label">
                      <span className="label-text">Address</span>
                      </label>
                      <input
                      value={teacherdata.address}
                      onChange={handleChange}
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      className="input input-bordered"
                      required
                      />
                      
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Skills</span>
                      </label>
                      <input type="text" 
                      value={teacherdata.skills}
                      onChange={handleChange}
                      name="skills" 
                      placeholder="Enter Skills" 
                      className="input input-bordered" required 
                      />
                  </div>
                  <div className="form-control mt-6">
                      <button onClick={submitForm} className="btn bg-[#146542] hover:bg-green-600 border-0  md:w-1/2 mx-auto text-white">Register</button>
                  </div>
              </form>
              <p className="text-center text-xs md:text-base">
                Already have an Account? Please{" "}
                <Link to="/login">
                  <button className="btn btn-link text-[#146542]">Login</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* <ToastContainer />  */}
      </div>
    );
};

export default TeacherRegister;
 

 

  

  

 
