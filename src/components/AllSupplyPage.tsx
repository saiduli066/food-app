import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductsMutation,
} from "@/redux/features/Api/data";
import { TProducts } from "./Supply";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {  useState } from "react";

const AllSupplyPage = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    console.log("delete id",id);
    await deleteProduct(id).unwrap();
  };

   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProducts>();

  
    
    const [selectedProductId, setSelectedProductId] = useState("");
    const [updateProducts] = useUpdateProductsMutation();
   
const onSubmit = async (data: TProducts) => {
  // console.log("all supply id: ", selectedProductId);
  await updateProducts({ productData: data, id: selectedProductId }).unwrap();
  reset();
  setSelectedProductId(""); 
};
  const handleGetId = (productId:string) => {
    setSelectedProductId(productId); 
  };

  if (isLoading) {
    return <h1 className="text-lg text-yellow-500 font-medium">Loading</h1>;
  }

  return (
    <div className="w-96 md:w-[65%] mx-auto">
      <Table>
        <TableCaption>A comprehensive view of all supply posts.</TableCaption>
        <TableHeader className="bg-slate-100">
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-center">Action</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: TProducts) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell className="">
                <div className="flex gap-3 items-center ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        onClick={() => handleGetId(item._id)}
                        className="cursor-pointer px-3 py-1 bg-sky-400 text-white rounded-md"
                      >
                        Edit
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] max-w-96">
                      <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit(onSubmit)}>
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
                              <input
                                type="hidden"
                                {...register("_id")}
                                value={item._id}
                              />
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
                                {...register("category", {
                                  required: true,
                                })}
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
                                {...register("quantity", {
                                  required: true,
                                })}
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
                              <input
                                className="input-field"
                                type="description"
                              />
                            </div>
                          </div>
                        </div>

                        <DialogFooter>
                          <div>
                            <Button
                              className="btn hover:bg-[#db3f31] "
                              type="submit"
                            >
                              Update
                            </Button>
                          </div>{" "}
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <div
                    onClick={() => handleDelete(item._id)}
                    className="cursor-pointer px-3 py-1 bg-red-400 text-white rounded-md"
                  >
                    Del
                  </div>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="px-3 py-1 bg-green-400 text-white rounded-md">
                  <Link to="/dashboard/create-supply">Add Supply</Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
};

export default AllSupplyPage;
