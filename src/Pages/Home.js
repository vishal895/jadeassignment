import heroBannerLg from '../assets/hero-banner-large.jpg';
import heroBannerSm from '../assets/hero-banner-small.jpg';
import AboutUs from '../Component/AboutUs';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';



const Home = () => {
  return (
    <>
      <Navbar/>
      <img 
        src={heroBannerLg} 
        srcSet={`${heroBannerSm} 770w, ${heroBannerLg} 1200w`}
        alt="sora and saki banner" 
        className='w-full'
      />
      {/* <Overview/> */}
      <AboutUs/>
      <Footer />
    </>
  )
}

export default Home;