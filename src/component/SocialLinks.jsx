import React from "react";
import { useRef, useEffect} from "react";
import { faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
    faWhatsapp,} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    const socials = [
    {
        icon: faEnvelope,
        url: "mailto:stephenniyiadeloye@gmail.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/dashboard",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0X0WD795SQ6OEY37x1dCDQ%3D%3D",
    },
    {
        icon: faWhatsapp,
        url: "https://wa.me/2349138017014"
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com/neochrismo55_webtech?igsh=MnBrYTU1N2Jnc294&utm_source=qr",
    },
    {
        icon: faTwitter,
        url: "https://x.com/web_neochrismo?s=21",
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
         px={8}
         py={4}
         justifyContent="space-between"
         alignItems="flex-center"
       >
         <nav>
           <HStack gap={8}>
             {socials.map(({ icon, url }) => (
               <a
                 key={url}
                 href={url}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FontAwesomeIcon icon={icon} size="2x" key={url} />
               </a>
             ))}
           </HStack>
         </nav>
         <nav>
           <HStack gap={8}>
             <a href="#mymission" onClick={handleClick("mymission")}>
                Mission
             </a>
             <a href="#contactme" onClick={handleClick("contactme")}>
               Contact Me
             </a>
           </HStack>
         </nav>
       </HStack>
     </Box>
   </Box>
 );
};

export default Header;
