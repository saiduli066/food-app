import { useGetProductsQuery } from "@/redux/features/Api/data";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export type TProducts = {
  _id: string;
  image: string;
  title: string;
  category: string;
  quantity: string;
};

const Supply = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  console.log(data);

  if (isLoading) {
    <p className="text-lg text-yellow-500 font-semibold">Loading...</p>;
  }
 

  return (
    <div className="my-6 md:my-10">
      <h1 className="font-bold text-xl md:text-4xl text-center m-5 md:m-10">
        Supplies
      </h1>
      <div className="grid grid-col-1 gap-3 md:gap-6 md:grid-cols-3 my-5 ">
        {data?.slice(0, 6).map((product: TProducts) => (
          <div
            key={product._id}
            className=" p-2 border outline-none rounded-md"
          >
            <div className="flex flex-col rounded-md">
              <div className="w-full md:h-72 rounded">
                <img
                  className="object-cover w-full h-44 md:h-80 "
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="bg-[#fce3e3fa] p-2">
                <h1 className=" text-lg md:text-3xl font-semibold">
                  {product.title}
                </h1>
                <p className="md:text-lg">
                  <span className="font-medium md:text-xl">Category: </span>
                  {product.category}
                </p>
                <p className="md:text-lg">
                  <span className="font-medium md:text-xl">Quantity: </span>{" "}
                  {product.quantity}
                </p>
              </div>
            </div>
            <div className="text-end my-3 ">
              <Dialog >
                <DialogTrigger asChild>
                  <Button className="btn hover:bg-[#db3f31] ">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-80 md:max-w-md">
                  <DialogHeader>
                    <DialogTitle> {product.title}</DialogTitle>
                    <DialogDescription>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores laudantium nobis, amet omnis incidunt dolore ad non temporibus explicabo commodi sunt eveniet nisi, nihil molestias odit itaque. Magnam, a voluptatibus.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <img src={product.image} alt="" />
                      <p className="md:text-lg">
                        <span className="font-medium md:text-xl">
                          Category:{" "}
                        </span>
                        {product.category}
                      </p>
                      <p className="md:text-lg">
                        <span className="font-medium md:text-xl">
                          Quantity:{" "}
                        </span>{" "}
                        {product.quantity}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="supplies">
          <Button className="btn hover:bg-[#db3f31]">See all</Button>
        </Link>
      </div>
    </div>
  );
};

export default Supply;
