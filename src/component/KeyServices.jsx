import React from "react";
import FullScreenSection from "./FullScreenSection";
import { VStack, HStack, Text, Heading} from "@chakra-ui/react";
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
                    <Heading as="h1" size="md" textAlign="center">
                        {MyService}
                    </Heading>
                    <Text textAlign="center" textStyle="xl"> Core Development Services</Text>
                    <Text textAlign="center" textStyle="xl">Framework and Technology Specialization</Text>
                    <Text textAlign="center" textStyle="xl">User Experience and Performance</Text>
                    <Text textAlign="center" textStyle="xl">Maintenance and Value-Added Services</Text>
                </VStack>
            </HStack>
            <HStack w="100%" alignItems="center" display="flex" margin="5px">
                <VStack>
                    <Heading as="h1" size="md" textAlign="center" id="mymission-section">
                        {Misson}
                    </Heading>
                    <Text textAlign="center" textStyle="xl">Bringing ideas into life and giving it more value by designing real life solution</Text>
                    <Text textAlign="center" textStyle="xl">Bringing comfort to the product user</Text>
                    <Text textAlign="center" textStyle="xl">Creating an environment where little ideas become excellent solutions</Text>
                </VStack>
            </HStack>
        </VStack>

    </FullScreenSection>
);

export default Services;