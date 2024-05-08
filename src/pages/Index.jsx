import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Input, Textarea, Button } from "@chakra-ui/react";
import { FaMusic, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} as="section">
        <Heading as="h1" size="2xl" color="gold.400">Drake</Heading>
        <Text fontSize="xl" color="gray.500">Canadian Rapper, Singer, Songwriter, and Actor</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} as="section" mt={10}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="lg" color="gold.400">Biography</Heading>
          <Text color="gray.300">Drake, born Aubrey Drake Graham, is a Canadian rapper, singer, and actor from Toronto. He first gained recognition as an actor on the teen drama television series Degrassi: The Next Generation.</Text>
        </VStack>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="lg" color="gold.400">Discography</Heading>
          <Text color="gray.300">Drake's music career took off in 2009 with the release of his debut mixtape, 'So Far Gone'. He has since released several highly successful albums.</Text>
        </VStack>
      </SimpleGrid>

      <Flex as="section" mt={10} justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
        <VStack spacing={4} flex="1">
          <Heading as="h2" size="lg" color="gold.400">Upcoming Tours</Heading>
          <Text color="gray.300">Check out the dates and locations for Drake's upcoming performances worldwide.</Text>
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="yellow" variant="solid">
            Tour Dates
          </Button>
        </VStack>
        <VStack spacing={4} flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" color="gold.400">Contact</Heading>
          <Input placeholder="Your Name" variant="filled" mb={2} />
          <Input placeholder="Your Email" variant="filled" mb={2} />
          <Textarea placeholder="Your Message" variant="filled" mb={2} />
          <Button leftIcon={<FaEnvelope />} colorScheme="yellow" variant="solid">
            Send Message
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;