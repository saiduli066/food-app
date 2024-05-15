import Banner from "@/components/Banner/Banner";
import Supply from "@/components/Supply";
import TopDonar from "@/components/TopDonar/TopDonar";
import AboutUs from "./AboutUs";
const Home = () => {


  return (
    <div className="w-full mx-auto">
      <Banner />
      <Supply />
      <TopDonar />
      <AboutUs/>
    </div>
  );
};

export default Home;
