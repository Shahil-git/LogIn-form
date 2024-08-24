import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/FirebaseAuth/FirebaseAuth";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";

const LogIn = () => {
  const { signIn } = useContext(AuthContext);  // Destructure to get signIn function

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const result = await signIn(email, password);
      console.log(result);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <div className="w-full max-w-md md:ml-[400px] p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 border-[3px] rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-800 mt-1">This field is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border-[3px] px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-800 mt-1">This field is required</span>}
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3  rounded-sm">
          <FaGoogle />
          </button>
          <button aria-label="Log in with GitHub" className="p-3  rounded-sm">
          <FaGithub />
          </button>
          <button aria-label="Log in with facebook" className="p-3  rounded-sm">
          <FaFacebook />
          </button>
          <button aria-label="Log in with twitter" className="p-3  rounded-sm">
          <FaTwitter></FaTwitter>
          </button>
          {/* More Social Media Buttons */}
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Do not have an account?
          <Link className="underline hover:text-blue-800" to="/registration">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
