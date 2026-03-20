import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, Grid, Text, Image, HStack, Stack, Spacer, Strong, Button,Highlight } from "@chakra-ui/react";
import { LuArrowDown } from "react-icons/lu"

const MyStory = "Building What Matters";
const StorySection = "Every Project Starts with a Story-Mine is Environmental-Driven";
const MyPhilosophy = "Your Ideas are not Useless-They just need the Right Platform";
const MyMission = "From Inspiration to Impact";

const LandingSection = () => (
    <FullScreenSection
        isDarkBackground
        backgroundColor="rgba(31, 37, 54, 1)"
        display="flex"
        direction={{ base: "column", md: "row" }}
    >
        <VStack gap="8" w="100%">
            <VStack w="100%" alignItems="center">
                <HStack alignItems="flex-start" gap="4">
                    <Box
                        textAlign="center"
                        p="4"
                        w="0.600"
                    >
                        <Heading as="h1" size="lg" textAlign="center" fontWeight="semibold">
                            {MyStory}
                        </Heading>
                    </Box>
                </HStack>
                <Box alignItems="flex-start" gap="4">
                    <Image
                            boxSize="250px"
                            src="/building.jpeg"
                            alt="Building What Matters"
                            float="right"
                        />
                        <Text textAlign="left" textStyle="xl">
                            <Highlight query="yours and mine" styles={{ color: "teal.600" }}>
                            Every project starts with a story — yours and mine.
                            </Highlight>
                            <br />
                            I help clients transform ideas into meaningful digital experiences, that connect with people and grow businesses.
                            </Text>

                        <Spacer />
                        
                </Box>
            </VStack>
            <VStack gap="8" w="100%" alignItems="center">
                <HStack alignItems="flex-start">
                    <Heading as="h2" size="2xl" textAlign="left">
                        {StorySection}
                    </Heading>
                </HStack>
                    <Box flexDirection="column" gap="4">
                         <Image
                            boxSize="250px"
                            src="/anartist.jpeg"
                            alt="Steal Like an Artist"
                            float="right"
                        />
                        <Text textAlign="left" textStyle="xl" textWrap="wrap">I have always been someone who wanted to do something new. That mindset changed when I read “Steal Like an Artist.” The book taught me that nothing in the creative world is entirely new,every idea is inspired by something that came before it, reimagined into something meaningful.
                            That message changed how I see creativity. I began to find value in what others might overlook. People started calling me an improviser because I believe nothing is truly a waste, we just have not discovered its purpose yet.</Text>


                </Box>
            </VStack>
            <VStack gap="8" w="100%" alignItems="center">
                <HStack alignItems="flex-start">
                 <Heading as="h2" size="2xl" textAlign="center">
                    {MyPhilosophy}
                 </Heading>
                </HStack>
                <HStack alignItems="flex-start" gap="4">
                    <Text textAlign="left" textStyle="xl">
                        <Highlight query="potential" styles={{ color: "teal.600" }}>
                        Every concept has potential.
                        </Highlight>
                        <br />
                        Sometimes, others do not see it, not because your idea lacks value, but because its purpose has not been fully understood.<br />
                        That is where I come in. My passion lies in helping clients uncover that hidden potential, shaping raw ideas into digital products that inspire confidence and drive results.

                    </Text>
                </HStack>
            </VStack>

            <Box
                textAlign="center"
                display="grid"
                w="100%"
                color="white"
                _hover={{ bg: "#333333"}}
            >
                <Strong size="3xl">WHY I BUILD</Strong>
                <Heading as="h2" size="2xl" textAlign="center">
                    {MyMission}
                    </Heading>
                    <Text alignItems="flex" textStyle="xl">This belief sparked my journey into web development, turning creativity into clarity, and ideas into results.
                    Today, I build with one goal:<br /> To create meaningful digital experiences that truly matter to you and your business.</Text>
            </Box>
            <Button
            color="black"
            _hover={{bg:"blue"}}>
                 Contact me now <LuArrowDown />
            </Button>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;