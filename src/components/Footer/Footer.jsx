import {
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const Footer = () => {
  const footerBgColor = useColorModeValue("gray.200", "gray.800");
  const footerTextColor = useColorModeValue("gray.700", "white");
  return (
    <Box
      py={8}
      px={8}
      bg={footerBgColor}
      color={footerTextColor}
      textAlign="center"
    >
      <Text fontSize="sm">
        © 2024 Ottoman AI Transliteration. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
