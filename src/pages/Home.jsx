
import FAQSection from '../components/FAQ/FAQ2';
import Timeline from '../components/Timeline/Timeline'
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import Carousel from "../components/Carousel/Carousel";
import Projects from '../components/projects/projects';
import AboutUs from '../components/aboutus/aboutus';
import CarouselReplacement from '../components/Carousel/CarouselReplacement';
import TeamPage from '../components/team/TeamPage';
import Developers from '../components/team/Team';
import Footer from '../components/footer/footer';
import RewardsSection from '../components/rewards/Rewards2';

export default function Home() {
  return (
    <div className='w-screen'>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Timeline/>

      <div className='p-12 h-auto'>
        {/* <Carousel/> */}
        <CarouselReplacement/>
      </div>
    

      <Projects/>
      <RewardsSection/>
      <FAQSection/>
      
      <Footer/>
    </div>

  );
}
