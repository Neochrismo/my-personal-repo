import React from "react";
import { useRef, useEffect} from "react";
import { faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
    faTiktok,
    faWhatsapp,} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorModeButton } from "../components/color-mode";

    const socials = [
    {
        icon: faEnvelope,
        url: "mailto:stephenniyiadeloye@gmail.com",
        alwaysVisible: true,
    },
    {
        icon: faGithub,
        url: "https://github.com/Neochrismo",
        alwaysVisible: true,
    },
    {
        icon: faTiktok,
        url: "https://www.tiktok.com/@neo_chrismo_web",
        alwaysVisible: false,
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/neochrismo-web-a0758319a",
        alwaysVisible: true,
    },
    {
        icon: faWhatsapp,
        url: "https://wa.me/2348020562579",
        alwaysVisible: false,
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com/neochrismo55_webtech?igsh=MnBrYTU1N2Jnc294&utm_source=qr",
        alwaysVisible: false,
    },
    {
        icon: faTwitter,
        url: "https://x.com/web_neochrismo?s=21",
        alwaysVisible: false,
    },
    ];
const Header = () => {
 const headerRef = useRef(null);

 useEffect(() => {
   let prevScrollPos = window.scrollY;
 const handleScroll = () => {
     const currentScrollPos = window.scrollY;
     const headerElement = headerRef.current;
     if (!headerElement) {
       return;
     }
     if (prevScrollPos > currentScrollPos) {
       headerElement.style.transform = "translateY(0)";
     } else {
       headerElement.style.transform = "translateY(-200px)";
     }
     prevScrollPos = currentScrollPos;
   }
   window.addEventListener('scroll', handleScroll)

   return () => {
     window.removeEventListener('scroll', handleScroll)
   }
 }, []);

 const handleClick = (anchor) => () => {
   const id = `${anchor}-section`;
   const element = document.getElementById(id);
   if (element) {
     element.scrollIntoView({
       behavior: "smooth",
       block: "start",
     });
   }
 };
 return (
   <Box
     position="fixed"
     top={0}
     left={0}
     right={0}
     translateY={0}
     transitionProperty="transform"
     transitionDuration=".3s"
     transitionTimingFunction="ease-in-out"
     backgroundColor="#18181b"
     ref={headerRef}
   >
     <Box color="white" maxWidth="1280px" margin="0 auto">
       <HStack
         px={{ base: 2, md: 16 }}
         py={{ base: 2, md: 6 }}
         justifyContent="space-between"
         alignItems="flex-start"
       >
         <nav>
           <HStack gap={3}>
             {socials.map(({ icon, url, alwaysVisible }) => (
              <Box
                 key={url}
                 display={alwaysVisible ? "block" : { base: "none", md: "block" }}
               >
               <a
                 href={url}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FontAwesomeIcon icon={icon} size="2x" key={url} />
               </a>
              </Box>
             ))}
           </HStack>
          </nav>
          <nav>
           <HStack gap={{ base: 4, md: 8 }}>
            <Box display={{ base: "none", md: "block" }}>
             <a href="#mymission" onClick={handleClick("mymission")}>
                Mission
             </a>
            </Box>
             <a href="#contactme"onClick={handleClick("contactme")}>
               Contact Me
             </a>
              <ColorModeButton />
           </HStack>
         </nav>
       </HStack>
     </Box>
   </Box>
 );
};

export default Header;
