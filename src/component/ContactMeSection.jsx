import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
 Box,
 Button,
 Field,
 Heading,
 Input,
 NativeSelect,
 NativeSelectIndicator,
 Textarea,
 VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../Hook/useSubmitHook";
import {useAlertContext} from "../context/alertContext";
import { useColorModeValue } from "../components/color-mode";

/**
* Covers a complete form implementation using formik and yup for validation
*/
const ContactMeSection = () => {
  const bgColor = useColorModeValue("blue.50", "rgba(31, 37, 54, 1)");
  const submitBg = useColorModeValue("teal.500", "teal.300");
  const submitHoverBg = useColorModeValue("teal.600", "teal.400");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const focusBorderColor = useColorModeValue("teal.500", "teal.300");
  const placeholderColor = useColorModeValue("gray.400", "gray.500");
 const { onOpen } = useAlertContext();
 const { isLoading, response, submit, clearResponse } = useSubmit();

 const formik = useFormik({
   initialValues: {
     firstName: "",
     email: "",
     type: "hireMe",
     comment: "",
     'form-name':'contact',
     'bot-field':'',
   },
   onSubmit: async (values,) => {
    console.log(values);
     await submit("/contact", values);
    },
  validationSchema: Yup
    .object({
     firstName: Yup
     .string()
     .required("Required"),
     email: Yup
      .string()
      .email("Invalid email address")
      .required("Required"),
     comment: Yup
       .string()
       .min(25, "Must be at least 25 characters")
       .required("Required"),
   }),
 });
   useEffect(() => {
  if (response) {
    onOpen(response.type, response.message);

    if (response.type === "success") {
      formik.resetForm();
    }
    clearResponse();
  }
}, [response, onOpen, formik, clearResponse]);

 return (
   <FullScreenSection
     backgroundColor= {bgColor}
     gap={8}
     py={4}
   >
     <VStack alignContent="flex">
       <Heading as="h1" id="contactme-section" textAlign="center">
         Contact me
       </Heading>
       <Box p={6} rounded="md" w="100%">
         <form onSubmit={formik.handleSubmit} name="contact" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" {...formik.getFieldProps('bot-field')} />
           <VStack gap={4}>
             <Field.Root invalid={!!formik.errors.firstName && formik.touched.firstName}>
               <Field.Label htmlFor="firstName">Name</Field.Label>
               <Input
                 id="firstName"
                 name="firstName"
                 borderColor={borderColor}
                 _placeholder={{ color: placeholderColor }}
                 _focus={{ borderColor: focusBorderColor, boxShadow:`0 0 0 1px ${focusBorderColor}`  }}
                 placeholder="Your name"
                 type="text"
                 {...formik.getFieldProps("firstName")}
               />
               <Field.ErrorText>{formik.errors.firstName}</Field.ErrorText>
             </Field.Root>
             <Field.Root invalid={!!formik.errors.email && formik.touched.email}>
               <Field.Label htmlFor="email">Email Address</Field.Label>
               <Input
                 id="email"
                 name="email"
                 borderColor={borderColor}
                 _placeholder={{ color: placeholderColor }}
                 _focus={{ borderColor: focusBorderColor, boxShadow:`0 0 0 1px ${focusBorderColor}`  }}
                  placeholder="Your email"
                 type="email"
                 {...formik.getFieldProps("email")}
               />
               <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
             </Field.Root>
             <Field.Root invalid={!!formik.errors.type && formik.touched.type}>
               <Field.Label htmlFor="type">Type of enquiry</Field.Label>
               <NativeSelect.Root>
               <NativeSelect.Field
               id="type"
               name="type"
               borderColor={borderColor}
               {...formik.getFieldProps("type")}>
                 <option value="hireMe">Freelance project proposal</option>
                 <option value="openSource">Open source consultancy session</option>
                 <option value="other">Other</option>
               </NativeSelect.Field>
               <NativeSelectIndicator />
                </NativeSelect.Root>
                <Field.ErrorText>{formik.errors.type}</Field.ErrorText>
             </Field.Root>
             <Field.Root invalid={!!formik.errors.comment && formik.touched.comment}>
               <Field.Label htmlFor="comment">Your message</Field.Label>
               <Textarea
                 id="comment"
                 name="comment"
                 height={250}
                  borderColor={borderColor}
                  _placeholder={{ color: placeholderColor }}
                  _focus={{ borderColor: focusBorderColor, boxShadow:`0 0 0 1px ${focusBorderColor}`  }}
                  placeholder="Please, let us know how we can help you"
                 {...formik.getFieldProps("comment")}
               />
               <Field.ErrorText>{formik.errors.comment}</Field.ErrorText>
             </Field.Root>
             <Button
             type="submit"
             colorScheme="black"
             backgroundColor={submitBg}
             width="full"
             disabled={!formik.isValid}
             isLoading={isLoading}
            //  color="white"
             _hover={{bg: submitHoverBg}}>
               Submit
             </Button>
           </VStack>
         </form>
       </Box>
     </VStack>
   </FullScreenSection>
 );
};

export default ContactMeSection;