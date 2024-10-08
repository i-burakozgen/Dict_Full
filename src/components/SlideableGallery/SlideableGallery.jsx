import {
  Box,
  Heading,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideableGallery = ({image}) => {
  const navigate = useNavigate();

  // Access the color mode
  const { colorMode, toggleColorMode } = useColorMode();
  const galleryBgColor = useColorModeValue("gray.100", "gray.600");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box bg={galleryBgColor} py={16} px={8} textAlign="center">
      <Heading as="h2" size="2xl" mb={6}>
        Gallery Showcase
      </Heading>
      <Box maxW="container.lg" mx="auto">
        <Slider {...sliderSettings}>
          <Box px={4}>
            <Image
              src={image}
              alt="Ottoman Prop 1"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              }}
            />
          </Box>
          <Box px={4}>
            <Image
              src="https://via.placeholder.com/300"
              alt="Ottoman Prop 2"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              }}
            />
          </Box>
          <Box px={4}>
            <Image
              src="https://via.placeholder.com/300"
              alt="Ottoman Prop 3"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              }}
            />
          </Box>
          <Box px={4}>
            <Image
              src="https://via.placeholder.com/300"
              alt="Ottoman Prop 4"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              }}
            />
          </Box>
          <Box px={4}>
            <Image
              src="https://via.placeholder.com/300"
              alt="Ottoman Prop 5"
              borderRadius="lg"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              }}
            />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default SlideableGallery;
