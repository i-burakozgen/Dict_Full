import { 
    Box, Heading, Text, Button, VStack, HStack, Link, Image, SimpleGrid, useColorMode, useColorModeValue 
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const heroBgGradient = useColorModeValue("linear(to-r, teal.300, blue.400)", "linear(to-r, teal.800, blue.900)");
    const heroTextColor = useColorModeValue("gray.800", "white");
  return (
    <Box
        bgGradient={heroBgGradient}
        color={heroTextColor}
        textAlign="center"
        py={16}
        px={8}
      >
        <Heading as="h1" size="3xl" mb={4}>
          AI Transliteration & Ottoman Dictionary
        </Heading>
        <Text fontSize="xl" mb={8}>
          Transform Ottoman text into modern Turkish and English. Search for word from rich and truested database and transliterate Ottoman scripts.
        </Text>
        <HStack spacing={4} justify="center">
          <Button colorScheme="teal" size="lg" onClick={() => navigate('/ai-translate')}>
            Try Transliteration
          </Button>
          <Button colorScheme="blue" size="lg" onClick={() => navigate('/dictionary')}>
            Go To Dictionary
          </Button>
        </HStack>
      </Box>
  )
}

export default Hero
