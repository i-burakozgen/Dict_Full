import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Link,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const aboutBgColor = useColorModeValue("blue.100", "blue.900");
  return (
    <Box py={16} px={8} bg={aboutBgColor} color="white" textAlign="center">
      <Heading as="h2" size="2xl" mb={6}>
        About Us
      </Heading>
      <Text fontSize="xl" mb={8}>
        We are a team of passionate developers dedicated to preserving and
        making Ottoman text accessible through AI and modern web technologies.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <VStack>
          <Image
            src="https://via.placeholder.com/150"
            alt="Your Profile Picture"
            borderRadius="full"
            boxSize="150px"
          />
          <Text fontWeight="bold" fontSize="lg">
            Your Name
          </Text>
          <Link href="https://www.linkedin.com/in/your-profile" isExternal>
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="linkedin"
              variant="solid"
            >
              LinkedIn Profile
            </Button>
          </Link>
        </VStack>
        <VStack>
          <Image
            src="https://via.placeholder.com/150"
            alt="Partner Profile Picture"
            borderRadius="full"
            boxSize="150px"
          />
          <Text fontWeight="bold" fontSize="lg">
            Partner Name
          </Text>
          <Link href="https://www.linkedin.com/in/partner-profile" isExternal>
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="linkedin"
              variant="solid"
            >
              Partner LinkedIn Profile
            </Button>
          </Link>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default About;
