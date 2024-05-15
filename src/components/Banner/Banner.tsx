import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/images/banner-imgs/banner1.jpg";
import banner2 from "../../assets/images/banner-imgs/banner2.jpg";
import banner3 from "../../assets/images/banner-imgs/banner3.jpg";
import banner4 from "../../assets/images/banner-imgs/banner4.jpg";
import banner5 from "../../assets/images/banner-imgs/banner5.jpg";


const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-full px-[7%] sm:px-[10%]">
      <Slider {...settings}>
        <div>
          <img src={banner1} className="w-full object-cover" />
        </div>
        <div>
          <img src={banner2} className="w-full object-cover" />
        </div>
        <div>
          <img src={banner3} className="w-full object-cover" />
        </div>
        <div>
          <img src={banner4} className="w-full object-cover" />
        </div>
        <div>
          <img src={banner5} className="w-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};


export default Banner;