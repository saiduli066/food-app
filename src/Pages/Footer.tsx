

const Footer = () => {
  return (
    <div className="bg-[#fff3cf3f] p-5 ">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-evenly space-y-4 md:gap-4  text-justify">
        <div className="md:col-span-2 md:space-y-4">
          <h1 className="text-xl lg:text-3xl font-semibold ">
            <span className="text-[#EA3F30]">F</span>
            <span className="text-[#FFC374]">o</span>
            <span className="text-[#FFC374]">o</span>
            <span className="text-[#EA3F30]">d</span>{" "}
            <span className="text-[#EA3F30]">N</span>exu
            <span className="text-[#EA3F30]">s</span>
          </h1>
          <p className="md:w-[70%] text-[13px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            obcaecati consequatur eligendi totam consectetur ut inventore.
            Aliquid ipsam illo vitae est fugit magni voluptatem impedit?
          </p>
        </div>
        <div className="md:text-[14px] md:space-y-3">
          <h1 className="font-semibold text-[16px] md:text-lg">Company</h1>
          <p>About Us</p>
          <p>Blog</p>
        </div>
        <div className="md:text-[14px] md:space-y-3">
          <h1 className="font-semibold text-[16px]  md:text-lg">Contact Us</h1>
          <p>food.nexus.info@gmal.com</p>
          <p>+880123456789</p>
        </div>
      </div>
      <div>
        {" "}
        <hr className="my-3 md:my-6 border-t-2 border-gray-200" />
        <p className="text-center">
          &copy; All Rights Reserved @ Food Nexus {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
