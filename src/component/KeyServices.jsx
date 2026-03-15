import React from "react";
import FullScreenSection from "./FullScreenSection";
import { VStack, HStack, Text, Heading} from "@chakra-ui/react";
import TypeWriter from "./TypeWriter";
const MyService = "My Key Services"
const Misson = "My Mission"
const Services =() => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="rgba(15, 34, 87, 1)"
    >
        <VStack gap="4" w="100%">
            <HStack  alignItems="center" display="flex" margin="5px">
                <VStack>
                    <TypeWriter as="h1" size="md" textAlign="center">
                        {MyService}
                    </TypeWriter>
                    <TypeWriter textAlign="center" textStyle="xl"> Core Development Services</TypeWriter>
                    <TypeWriter textAlign="center" textStyle="xl">Framework and Technology Specialization</TypeWriter>
                    <TypeWriter textAlign="center" textStyle="xl">User Experience and Performance</TypeWriter>
                    <TypeWriter textAlign="center" textStyle="xl">Maintenance and Value-Added Services</TypeWriter>
                </VStack>
            </HStack>
            <HStack w="100%" alignItems="center" display="flex" margin="5px">
                <VStack>
                    <TypeWriter as="h1" size="md" textAlign="center" id="mymission-section">
                        {Misson}
                    </TypeWriter>
                    <TypeWriter textAlign="center" textStyle="xl">Bringing ideas into life and giving it more value by designing real life solution</TypeWriter>
                    <TypeWriter textAlign="center" textStyle="xl">Bringing comfort to the product user</TypeWriter>
                    <TypeWriter textAlign="center" textStyle="xl">Creating an environment where little ideas become excellent solutions</TypeWriter>
                </VStack>
            </HStack>
        </VStack>

    </FullScreenSection>
);

export default Services;