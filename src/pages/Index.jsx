import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Input, Textarea, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="black" color="gold" minHeight="100vh" p={8}>
        <VStack spacing={10} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">Mac Miller</Heading>
          <Box>
            <Heading as="h2" size="xl">Biography</Heading>
            <Text mt={4}>
              Malcolm James McCormick, known professionally as Mac Miller, was an American rapper, singer, and record producer from Pittsburgh, Pennsylvania. Known for his canny wordplay and artistic reinvention, Mac Miller gained critical acclaim and a strong following with his deeply personal and introspective musical style.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl">Discography</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={4}>
              <Text>Scorpion (2018)</Text>
              <Text>Views (2016)</Text>
              <Text>Nothing Was the Same (2013)</Text>
              {/* More albums can be added here */}
            </SimpleGrid>
          </Box>
          <Box>
            <Heading as="h2" size="xl">Upcoming Tours</Heading>
            <Text mt={4}>
              Catch Mac Miller tribute performances at these locations. Visit the official website for more details and ticket information.
              {/* Tour dates and locations can be added here */}
            </Text>
          </Box>
          <Box as="form" onSubmit={(e) => e.preventDefault()}>
            <Heading as="h2" size="xl">Contact</Heading>
            <VStack spacing={5} mt={4}>
              <Input placeholder="Your Name" variant="filled" _placeholder={{ color: 'gray.500' }} />
              <Input placeholder="Your Email" type="email" variant="filled" _placeholder={{ color: 'gray.500' }} />
              <Textarea placeholder="Your Message" variant="filled" _placeholder={{ color: 'gray.500' }} />
              <Button type="submit" colorScheme="yellow">Send Message</Button>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;