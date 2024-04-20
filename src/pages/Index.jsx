import { useState } from "react";
import { Box, Button, Container, Flex, Heading, IconButton, Textarea, useToast, VStack } from "@chakra-ui/react";
import { FaRobot, FaSave, FaTrash } from "react-icons/fa";

const Index = () => {
  const [text, setText] = useState("");
  const toast = useToast();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const saveDocument = () => {
    // Simulate saving the document
    toast({
      title: "Document saved.",
      description: "Your document has been saved successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const clearDocument = () => {
    setText("");
    toast({
      title: "Document cleared.",
      description: "All text has been removed.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const generateText = () => {
    // Simulate AI generating text
    const aiText = " Here is some AI-generated content to help you continue your writing...";
    setText(text + aiText);
    toast({
      title: "AI Copilot",
      description: "AI has generated some text for you.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          AI Word Processor
        </Heading>
        <Textarea placeholder="Start typing here..." value={text} onChange={handleTextChange} size="lg" height="300px" />
        <Flex width="100%" justify="space-between">
          <IconButton icon={<FaRobot />} aria-label="Generate text" onClick={generateText} colorScheme="teal" />
          <Button leftIcon={<FaSave />} colorScheme="blue" onClick={saveDocument}>
            Save
          </Button>
          <IconButton icon={<FaTrash />} aria-label="Clear text" onClick={clearDocument} colorScheme="red" />
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
