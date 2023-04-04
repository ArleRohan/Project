import HeroSection from '../HeroSection';
import { useProductContext } from '../context/productcontext';


const AboutUs = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Local Market"
  };

  return <>
    {myName}
    <HeroSection myData={data} />
    {" "}
  </>
};

export default AboutUs
