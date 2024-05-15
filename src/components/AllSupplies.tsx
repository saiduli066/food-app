import { useGetProductsQuery } from "@/redux/features/Api/data";
import { TProducts } from "./Supply";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ViewDetails from "@/Pages/ViewDetails";
import { useState } from "react";
const AllSupplies = () => {

  const { data, isLoading } = useGetProductsQuery(undefined);

  
  const [selectedProduct, setSelectedProduct] = useState<TProducts|null>(null);

  const handleViewDetails = (product: TProducts) => {
    console.log("all supply :", product);
    setSelectedProduct(product);
  };

   if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log('Selected product before rendering ViewDetails:', selectedProduct);


  return (
    <div className="my-6 md:my-10">
      {isLoading && (
        <h1 className="text-lg text-yellow-500 font-medium">Loading</h1>
      )}
      <div className="grid grid-col-1 rounded gap-3 md:gap-6 md:grid-cols-3 my-5">
        {data &&
          data?.map((product: TProducts) => (
            <div key={product._id} className="flex flex-col p-3">
              <div className="w-full md:h-72 rounded">
                <img
                  className="object-cover w-full h-44 md:h-80"
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
              <div className="text-end my-3 ">
                <Button
                  onClick={() => handleViewDetails(product)}
                  className="btn hover:bg-[#db3f31] "
                >
                  <Link to={`/supplies/${product._id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
      </div>
      {selectedProduct && <ViewDetails{...selectedProduct} />}
    </div>
  );
};

export default AllSupplies;
