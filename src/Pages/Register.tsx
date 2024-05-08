import { FormEvent } from "react";
import signUpImg from "../assets/images/sign-up-image.jpg";
import signUpIcon from "../assets/images/signup_5836184.png";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

type TInputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit = (e: FormEvent) => {
    console.log(e);
  };
  return (
    <div className=" w-full my-10 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
      <div className="w-[50%] mx-auto">
        <img
          className="md:object-contain w-full h-auto"
          src={signUpImg}
          alt=""
        />
      </div>
      <div className="w-[80%] md:w-[30%] mx-auto">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <h1 className="mb-3 md:mb-5 font-semibold  text-lg md:text-2xl">
            Sign Up
          </h1> */}
          <div className="w-20 md:w-32">
            <img src={signUpIcon} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="">
              <label className="block mb-1  text-[16px] md:text-lg text-gray-700">
                Name
              </label>
              <input
                className="input-field"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs text-red-400">
                  This field is required
                </span>
              )}
            </div>
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
            <div>
              <Button className="btn w-full hover:bg-[#db3f31] " type="submit">
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
