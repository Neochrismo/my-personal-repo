import React, { useEffect, useState, useRef } from "react";
import { useInView, motion, animate } from "framer-motion";
import { Text } from "@chakra-ui/react";

function TypeWriter({ text, Speed = 0.08, ...rest}) {
  const [displayedText, setDisplayedText] = useState("");
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
  const Ref = useRef(null);
  const isInView = useInView(Ref, { once: true, amount: 0.5 });
    useEffect(() => {
        if (isInView && text) {
            const controls = animate(0, text.length, {
                duration: text.length * Speed,
                ease: "linear",
                onUpdate: (latest) => {
                    setDisplayedText(text.substring(0, Math.round(latest)));
                },
            });
            return () => controls.stop();
        }
    }, [isInView, text, Speed]);

  return (
    <Text ref={Ref} {...rest}>
      {displayedText}
      <motion.span
      style={{display: "inline-block", width:"2px", height: "1em", backgroundColor: "currentcolor", marginLeft: "2px",}}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        />
    </Text>
  );
}
export default TypeWriter;