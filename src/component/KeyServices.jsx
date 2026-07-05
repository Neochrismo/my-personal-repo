import React from "react";
import FullScreenSection from "./FullScreenSection";
import { VStack, HStack, Text, Heading} from "@chakra-ui/react";
import { useColorModeValue } from "../components/color-mode";
const MyService = "My Key Services"
const Misson = "My Mission"
const Stack = "My Stack"
const Tools ="Tools & DevOps"
const Services =() => {
    const bgColor = useColorModeValue("blue.50", "rgba(15, 34, 87, 1)");
    return(
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        backgroundColor= {bgColor}
    >
        <VStack gap="4" w="100%" px={{ base: "6", md: "12"}} margin={{ base: "10px", md: "2px" }}>
            <HStack  alignItems="center" display="flex">
                <VStack>
                    <Heading as="h2" size="2xl" textAlign="center">
                        {MyService}
                    </Heading>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}> Core Development Services</Text>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>Framework and Technology Specialization</Text>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>User Experience and Performance</Text>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>Maintenance and Value-Added Services</Text>
                </VStack>
            </HStack>
            <HStack alignItems="center" display="flex">
                <VStack>
                    <Heading as="h2" size="2xl" textAlign="center" id="mymission-section">
                        {Misson}
                    </Heading>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>Bringing ideas into life and giving it more value by designing real life solution</Text>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>Bringing comfort to the product user</Text>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>Creating an environment where little ideas become excellent solutions</Text>
                </VStack>
            </HStack>
                    <Heading as="h2" size="2xl" textAlign="center">
                        {Stack}
                    </Heading>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>HTML, CSS, JavaScript</Text>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>React, Chakra, Yup,Figma</Text>
                    <Heading as="h2" size="2xl" textAlign="center">
                        {Tools}
                    </Heading>
                    <Text textAlign="center" textStyle={{ base: "md", md: "xl" }}>Git, GitHub, Vercel, Netlify</Text>
        </VStack>

    </FullScreenSection>
);

}


export default Services;