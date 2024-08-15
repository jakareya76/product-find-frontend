import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  return (
    <div className="mt-4">
      <button
        onClick={() => loginWithGoogle()}
        className="btn w-full bg-gray-200 rounded-full text-lg font-[500]"
      >
        <FcGoogle size={25} className="mr-2 mt-1" />
        Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
