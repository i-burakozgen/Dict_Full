import { 
  Box,
} from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import SlideableGallery from '../components/SlideableGallery/SlideableGallery';
import Footer from '../components/Footer/Footer';
import About from "../components/About/About";

const HomePage = () => {
  return (
    <Box>
      <Hero/>
      <Features/>
      <SlideableGallery/>
      <About/>
      <Footer/>
    </Box>
  )
  
};

export default HomePage;
