import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { TProducts } from "@/components/Supply";
import { usePostProductsMutation } from "@/redux/features/Api/data";
import Swal from "sweetalert2";

const CreateSupply = () => {
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm<TProducts>();

  const [postProducts] = usePostProductsMutation();

  const onSubmit: SubmitHandler<TProducts> = async (product:TProducts) => {
    await postProducts(product).unwrap();
    reset();
    Swal.fire({
      icon: "success",
      title: "Product added successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className=" w-full my-10 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
      <div className="w-[80%] md:w-[30%] mx-auto">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-3 md:mb-5 font-semibold  text-lg md:text-2xl">
            Create Supply Post
          </h1>

          <div className="flex flex-col justify-center space-y-5">
            <div>
              <div className="">
                <label className="block mb-1  text-[16px] md:text-lg text-gray-700">
                  Image
                </label>
                <input
                  className="input-field"
                  type="text"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-xs text-red-400">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div>
              <div>
                <label className="block mb-1 text-[16px] md:text-lg">
                  Title
                </label>
                <input
                  className="input-field"
                  type="text"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-xs text-red-400">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-[16px] md:text-lg">
                  Category
                </label>
                <input
                  className="input-field"
                  type="text"
                  {...register("category", { required: true })}
                />
                {errors.category && (
                  <span className="text-xs text-red-400">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-[16px] md:text-lg">
                  Quantity
                </label>
                <input
                  className="input-field"
                  type="text"
                  {...register("quantity", { required: true })}
                />
                {errors.quantity && (
                  <span className="text-xs text-red-400">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label className="block mb-1 text-[16px] md:text-lg">
                  Description
                </label>
                <input className="input-field" type="description" />
              </div>
            </div>
            <div>
              <Button className="btn w-full hover:bg-[#db3f31] " type="submit">
                Post
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSupply;
