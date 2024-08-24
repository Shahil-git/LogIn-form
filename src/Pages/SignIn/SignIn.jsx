import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/FirebaseAuth/FirebaseAuth";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { createUser } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input 
                type="text" 
                placeholder="First name" 
                className="input input-bordered" 
                {...register("first_name", { required: true })} 
              />
              {errors.first_name && <span className="text-red-800 mt-1">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Last name" 
                className="input input-bordered"  
                {...register("last_name", { required: true })} 
              />
              {errors.last_name && <span className="text-red-800 mt-1">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="Email" 
                className="input input-bordered" 
                {...register("email", { required: true })} 
              />
              {errors.email && <span className="text-red-800 mt-1">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="Password" 
                className="input input-bordered" 
                {...register("password", { required: true })} 
              />
              {errors.password && <span className="text-red-800 mt-1">This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div>
              <h1>Already have an account? <span className="underline hover:text-blue-700"><Link to="/login">Login</Link></span></h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
