import { Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
const TeacherRegister = () => {
    const handleRegister = (e) => {
        e.preventDefault();  
    
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const qua = e.target.qua.value;
        const mobile = e.target.mobile.value;
        const add = e.target.add.value;
        console.log(name, email, password, qua, mobile, add);
    
      }
     
    return (
        <div className="">
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="mt-10">
              <h1 className="text-2xl md:text-5xl font-bold">Register now!</h1>
            </div>
            <div className="w-1/2 bg-[#32cc8c] p-4 rounded-lg">
              <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Full Name</span>
                      </label>
                      <input 
                          type="text" 
                          name="name" 
                          placeholder="Enter your Full Name" 
                          className="input input-bordered" required 
                      />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input type="email" 
                      name="email" 
                      placeholder="Enter Email" 
                      className="input input-bordered" required 
                      />
                  </div>
                   
                <div className="form-control">
                      <label className="label">
                      <span className="label-text">Email</span>
                      </label>
                      <input
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
                      type="text"
                      name="qua"
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
                      type="number"
                      name="mobile"
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
                      type="text"
                      name="add"
                      placeholder="Enter Address"
                      className="input input-bordered"
                      required
                      />
                      
                  </div>
                  <div className="form-control mt-6">
                      <button className="btn bg-[#146542] hover:bg-green-600 border-0  md:w-1/2 mx-auto text-white">Register</button>
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
 

 

  

  

 
