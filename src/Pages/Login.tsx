import loginImg from "../assets/images/login-image.jpg";
import loginIcon from "../assets/images/login_14018591.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import useAuth from "@/firebase/useAuth";

type TInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = (e: TInputs) => {
    console.log(e);
    signIn(e.email, e.password).then((result) => {
      if (user) {
      return  navigate(from)
      }
    }).catch((err) => {
      console.log(err);
    });
    

  };
  return (
    <div className=" w-full mb-10 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
      <div className="w-[50%] mx-auto">
        <img className="object-contain w-full h-auto" src={loginImg} alt="" />
      </div>
      <div className="w-[80%] md:w-[30%] mx-auto">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <h1 className="mb-3 md:mb-5 font-semibold  text-lg md:text-2xl">
            Login
          </h1> */}
          <div className="w-24 md:w-32">
            <img src={loginIcon} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <div>
              <div className="">
                <label className="block mb-1  text-[16px] md:text-lg text-gray-700">
                  Email
                </label>
                <input
                  className="input-field"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-xs text-red-400">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div>
              <div>
                <label className="block mb-1 text-[16px] md:text-lg">
                  Password
                </label>
                <input
                  className="input-field"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-xs text-red-400">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div>
              <Button className="btn w-full hover:bg-[#db3f31] " type="submit">
                Login
              </Button>
            </div>
          </div>
        </form>
        <div className="my-4">
          <p className="text-[14px] mb-2">or login with google</p>
          <div>
            <GoogleLogin />
          </div>
        </div>
        <p className="text-[14px]">
          don't have an account?{" "}
          <Link to="/register" className="underline cursor-pointer">
            sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
