import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Link,
  Image,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Features = () => {
  const navigate = useNavigate();

  // Access the color mode
  const { colorMode, toggleColorMode } = useColorMode();
  const sectionBgColor = useColorModeValue("gray.50", "gray.700");
  return (
    <Box
      py={16}
      px={8}
      bg={sectionBgColor}
      textAlign="center"
    >
      <Heading as="h2" size="2xl" mb={6}>
        Features
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <VStack>
          <Image
            src="../../assets/ai-underconstructionDark"
            alt="AI Transliteration"
          />
          <Heading as="h3" size="lg">
            AI Transliteration
          </Heading>
          <Text textAlign="center">
            Use our state-of-the-art AI model to transliterate Ottoman text into
            modern Turkish and English preserving its rich linguistic heritage.
          </Text>
        </VStack>
        <VStack>
          <Image
            src="https://via.placeholder.com/150"
            alt="Ottoman Dictionary"
          />
          <Heading as="h3" size="lg">
            Ottoman Dictionary
          </Heading>
          <Text textAlign="center">
            Search for thousands of Ottoman words and their meanings in modern
            from trusted resources.
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Features;
