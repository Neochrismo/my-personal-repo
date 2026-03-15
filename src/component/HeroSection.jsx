import React from "react"; 
import { Avatar, AvatarGroup, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Oluwaniyi!"; 
const bio1 = "A frontend developer"; 
const bio2 = "specialized in React"; 
 
const HeroSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365"
   display="flex" 
 > 
   <VStack gap="16"> 
     <VStack gap="6" alignItems="center">
      <AvatarGroup>
        <Avatar.Root>
          <Avatar.Fallback name="Oluwaniyi Adeloye" />
            <Avatar.Image src="https://i.pravatar.cc/150?img=7" size="2xl" />
        </Avatar.Root>
      </AvatarGroup>
       <Heading as="h4" size="md" alignItems="center"> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack gap="6"> 
       <Heading as="h1" size="3xl" alignItems="center"> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" alignItems="center"> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default HeroSection;