import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
* Illustrates the use of children prop and spread operator
*/
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
 return (
   <VStack
    width="100dvw"
      minHeight="100dvh"
     backgroundColor={boxProps.backgroundColor}
     color={isDarkBackground ? "white" : "black"}
     {...boxProps}
     display="grid"
   >
     <VStack maxWidth="1280px" width="100%">
       {children}
     </VStack>
   </VStack>
 );
};

export default FullScreenSection;