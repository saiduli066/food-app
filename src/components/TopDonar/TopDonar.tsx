// import donorTestimonials from "./topDonarDetails";
// import Carousel from "react-grid-carousel";

// const TopDonar = () => {
//   return (
//     <Carousel
//       cols={3}
//       containerStyle={{ maxWidth: "1300px", margin: "0 auto" }}
//     >
//       {donorTestimonials.map(({ name, testimonial }, i) => (
//         <Carousel.Item key={i}>
//           <Card>
//             <User>
//               <Avatar>{name[0]}</Avatar>
//               <Username>{name}</Username>
//             </User>
//             <Text>{testimonial}</Text>
//           </Card>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default TopDonar;


import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const TopDonar = () => {
  const donorTestimonials = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R148060002&ga=GA1.1.392072358.1681223784&semt=sph",
      occupation: "Software Engineer",
      testimonial:
        "I'm thrilled to have contributed to such a noble cause. It feels great to be part of a community that cares for those in need.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image:
        "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&uid=R148060002&ga=GA1.1.392072358.1681223784&semt=sph",

      occupation: "Teacher",
      testimonial:
        "Donating supplies was a rewarding experience for me. It's heartwarming to see the positive impact it has on people's lives.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      image:
        "https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?size=626&ext=jpg&uid=R148060002&ga=GA1.1.392072358.1681223784&semt=sph",

      occupation: "Doctor",
      testimonial:
        "As a healthcare professional, I understand the importance of access to essential supplies. I'm proud to support initiatives that provide aid to those who need it most.",
    },
    {
      id: 4,
      name: "Emily Brown",
      image:
        "https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg?t=st=1715371273~exp=1715374873~hmac=128eb1ed2897c7993e107e17b6d3310a767e76fe1fa0b552caa8c9a108cea4f5&w=740",

      occupation: "Social Worker",
      testimonial:
        "Seeing the smiles on people's faces when they receive the supplies they need is incredibly fulfilling. Every donation makes a difference.",
    },
    {
      id: 5,
      name: "David Rodriguez",
      image:
        "https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?t=st=1715371127~exp=1715374727~hmac=121b931858c1b717768cf1a9f0b9c8ea89c111b6cd359b6a78aad43efdfac75f&w=740",

      occupation: "Entrepreneur",
      testimonial:
        "Supporting organizations that provide essential supplies is crucial. Together, we can make a positive impact on communities worldwide.",
    },
    {
      id: 6,
      name: "Sarah Lee",
      image:
        "https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?t=st=1715371247~exp=1715374847~hmac=ba091101eb090fdd700dc863d13ead88cd244c541d1a16c15f624372235baff5&w=740",

      occupation: "Student",
      testimonial:
        "Contributing to supply donations has been an eye-opening experience for me. It's inspiring to see people come together to help others in times of need.",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = donorTestimonials.length;
  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <section className="w-[65%] mx-auto my-10 md:my-24 ">
      <div>
        {donorTestimonials.map(
          (item, index) =>
            index === current && (
              <div key={index} className="">
                <div>
                  <div>
                    <Quote />
                  </div>
                  <h2 className=" text-gray-600 md:text-xl  font-semibold">
                    {item.testimonial}
                  </h2>
                </div>
                <div className=" md:flex  md:gap-4  justify-center my-4 md:my-6 text-center">
                  {" "}
                  <div className="flex md:flex-col items-center gap-4 w-full  ">
                    <div>
                      <img
                        className=" rounded-full h-24 md:h-32 w-24 md:w-32 object-cover "
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="text-gray-600 text-lg font-semibold">{item.name}</h6>
                      <span className="font-medium">{item.occupation}</span>
                    </div>
                  </div>
                </div>
                <div className="m-4 flex justify-between items-center">
                  <span
                    onClick={previous}
                    className="bg-slate-200 px-5 py-3 rounded"
                  >
                    {" "}
                    <ChevronLeft className="" />
                  </span>
                  <span
                    onClick={next}
                    className="bg-slate-200 px-5 py-3  rounded"
                  >
                    {" "}
                    <ChevronRight />
                  </span>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default TopDonar;