import React, { useState } from "react";
import { Container, SimpleGrid, VStack, Text,Box } from "@chakra-ui/react";
import dummyData from "../components/CardBody/CardData"; // Import the dummy data file
import SearchBar from "../components/SearchBar/SearchBar";
import DictionaryCard from "../components/Card/DictionaryCard";

const Dictionary = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Function to simulate data fetching from dummyData based on query
  const handleSearch = () => {
    if (query.length > 2) {
      const filteredResults = [
        {
          word: dummyData.wordName,
          meanings: dummyData.meanings.$values.map(m => m.meaningName),
          transliterations: dummyData.persianTransliterations.$values,
        },
      ].filter(entry => 
        entry.word.toLowerCase().includes(query.toLowerCase()) || 
        entry.meanings.some(m => m.toLowerCase().includes(query.toLowerCase()))
      );

      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <Container maxW="736px" mt={5}>
      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Search..."
        onSearch={handleSearch}
      />

      <VStack align="stretch" spacing={4}>
        {results.length > 0 ? (
          <Box width="100%" id="card-component">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}  width="100%">
            {results.map((entry, index) => (
              <DictionaryCard
                key={index}
                word={entry.word}
                meanings={entry.meanings}
                transliterations={entry.transliterations} 
              />
            ))}
          </SimpleGrid>
          </Box>
        ) : (
          <Text fontSize="md" color="gray.500">
            No results found. Please enter a word with at least 3 characters.
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Dictionary;