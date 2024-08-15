import { useForm } from "react-hook-form";
import signUpSvg from "../assets/signup.svg";
import { Link } from "react-router-dom";
import SocialLogin from "../components/shared/SocialLogin";

const SignUpPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col items-center justify-center lg:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={signUpSvg}
              alt="login-svg"
              className="max-h-[500px] md:mt-24"
            />
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
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  {...register("username", { required: true })}
                />
              </div>
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
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary text-white">Sign Up</button>
              </div>
              <p className="text-center text-sm font-medium mt-2">
                Already Have an Account?{" "}
                <Link to="/login" className="text-red-500 mx-1 underline">
                  Please Login
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

export default SignUpPage;
