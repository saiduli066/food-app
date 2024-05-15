type ViewDetailsProps = {
  _id: string;
  image: string;
  title: string;
  category: string;
  quantity: string;
};

const ViewDetails = (props: ViewDetailsProps) => {
  const { image, title, category, quantity } = props;
  console.log("view-details", category);
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <img src={image} alt="" />
          <p className="md:text-lg">
           
            {title}
          </p>
          <p className="md:text-lg">
            <span className="font-medium md:text-xl">Category: </span>
            {category}
          </p>
          <p className="md:text-lg">
            <span className="font-medium md:text-xl">Quantity: </span>{" "}
            {quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
