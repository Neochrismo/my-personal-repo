import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, Text, Image, HStack, Spacer, Button, Flex } from "@chakra-ui/react";
import { LuArrowDown } from "react-icons/lu"

const MyStory = "Building What Matters";
const StorySection = "Every Project Starts with a Story-Mine is Environmental-Driven";
const MyPhilosophy = "Your Ideas are not Useless-They just need the Right Platform";
const MyMission = "From Inspiration to Impact";
import { useColorModeValue } from "../components/color-mode";

const LandingSection = () => {
    const bgColor = useColorModeValue( "blue.50","rgba(31, 37, 54, 1)" );

    return(
    <FullScreenSection
        backgroundColor={bgColor}
        display="flex"
    >
        <VStack gap="2">
            <VStack>
                <HStack alignItems="flex-start" borderBottom={{ base: "20px", md: "20px" }} pb={{ base: "2", md: "4" }}>
                        <Heading as="h1" textStyle={{ base: "xl", md: "4xl"}} textAlign="center" fontWeight="semibold">
                            {MyStory}
                        </Heading>
                </HStack>
                <Box margin={{base: "10px", md: "2px"}}>
                    {<Image
                            boxSize={{base:"50%", md:"250px"}}
                            src="/building.jpeg"
                            alt="Building What Matters"
                            float={{ base: "right", md: "right" }}
                            mb={{ base: 4, md: 0 }}
                            ml={{ md: 4 }}
                            mt={{ base: 4, md: 0 }}
                        />}
                     <Text textStyle={{ base: "md", md: "xl" }}>
                            Every project starts with a story —
                            <span style={{ color: "#319795" }}> yours and mine.</span>
                            <br />
                            I help clients transform ideas into meaningful digital experiences, that connect with people and grow businesses.
                            </Text>

                </Box>
            </VStack>
            <VStack border="20px" pb="4">
                <HStack alignItems="flex-start">
                    <Heading as="h2" textStyle={{ base: "xl", md: "4xl"}} textAlign="center" fontWeight="semibold" border="20px" pb="4">
                        {StorySection}
                    </Heading>
                </HStack>
                    <Box margin={{base: "10px", md: "2px"}}>
                         {<Image
                            boxSize={{base:"50%", md:"250px"}}
                            src="/anartist.jpeg"
                            alt="Steal Like an Artist"
                            float={{ base: "right", md: "right" }}
                            mb={{ base: 4, md: 0 }}
                            ml={{ md: 4 }}
                            mt={{ base: 5, md: 0 }}
                        />}
                        <Text textStyle= {{ base: "md", md: "xl" }}>I have always been someone who wanted to do something new. That mindset changed when I read “Steal Like an Artist.” The book taught me that nothing in the creative world is entirely new,every idea is inspired by something that came before it, reimagined into something meaningful.
                            That message changed how I see creativity. I began to find value in what others might overlook. I believe nothing is truly a waste, we just have not discovered its purpose yet.</Text>


                </Box>
            </VStack>
            <VStack>
                <HStack display="flex-start">
                 <Heading as="h2" size= {{ base: "xl", md: "4xl"}} textAlign="center" border="20px" pb="4" fontWeight="semibold">
                    {MyPhilosophy}
                 </Heading>
                </HStack>
                <HStack alignItems="flex-start" gap="4">
                    <Text textAlign="left" textStyle= {{ base: "md", md: "xl" }} margin={{base: "10px", md: "2px"}}>
                        Every concept has
                        <span style={{ color:"#319795" }}> potential.</span>
                        <br />
                        Sometimes, others do not see it, not because your idea lacks value, but because its purpose has not been fully understood.<br />
                        That is where I come in. My passion lies in helping clients uncover that hidden potential, shaping raw ideas into digital products that inspire confidence and drive results.

                    </Text>
                </HStack>
            </VStack>

            <Box>
                <Text fontWeight="bold" size="3xl" textAlign="center">WHY I BUILD</Text>
                <Heading as="h2" size="2xl" textAlign="center">
                    {MyMission}
                    </Heading>
                    <Text alignItems="flex-start" textStyle= {{ base: "md", md: "xl" }} margin={{base: "10px", md: "0"}}>This belief sparked my journey into web development, turning creativity into clarity, and ideas into results.
                    Today, I build with one goal:<br /> To create meaningful digital experiences that truly matter to you and your business.</Text>
            </Box>
            <Button
            color="#F59E0B"
            _hover={{bg:"white"}}>
                 Contact me now <LuArrowDown />
            </Button>
        </VStack>
    </FullScreenSection>
);

}

export default LandingSection;