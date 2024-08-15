import { useForm } from "react-hook-form";
import loginSvg from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/shared/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { loginUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    const { email, password } = data;
    try {
      await loginUser(email, password);
      reset();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    return navigate("/");
  }

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <img src={loginSvg} alt="login-svg" className="max-h-[500px]" />
          </div>
          <div className="card w-full md:w-1/2 bg-base-100 max-w-sm shrink-0 shadow-2xl">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary text-white">Login</button>
              </div>
              <p className="text-center text-sm font-medium mt-2">
                New Here ?{" "}
                <Link to="/signup" className="text-red-500 mx-1 underline">
                  Create a Account
                </Link>
              </p>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
