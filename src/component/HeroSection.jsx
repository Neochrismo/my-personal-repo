import React from "react";
import { Avatar, AvatarGroup, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Oluwaniyi!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const HeroSection = () => (
 <FullScreenSection
   isDarkBackground
   backgroundColor="#2A4365"
   display="flex"
 >
   <VStack w= "100%">
     <VStack gap="2" alignItems="center">
        <AvatarGroup>
          <Avatar.Root>
            <Avatar.Fallback name="Oluwaniyi Adeloye" />
              <Avatar.Image src="https://i.pravatar.cc/150?img=7" size="3xl" />
          </Avatar.Root>
        </AvatarGroup>
       <Heading as="h4" size="md" alignItems="center" textAlign="center">
         {greeting}
       </Heading>
     </VStack>
     <VStack gap="2">
       <Heading as="h1" size="lg" alignItems="center" textAlign="center">
         {bio1}
       </Heading>
       <Heading as="h1" size="lg" alignItems="center" textAlign="center">
         {bio2}
       </Heading>
     </VStack>
   </VStack>
 </FullScreenSection>
);

export default HeroSection;