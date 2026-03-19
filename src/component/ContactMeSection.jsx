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

/**
* Covers a complete form implementation using formik and yup for validation
*/
const ContactMeSection = () => {
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
     isDarkBackground
     backgroundColor="rgba(15, 34, 87, 1)"
     gap={8}
     py={4}
   >
     <VStack w="100%" p={16} alignItems="center" maxW="1024px" alignContent="flex">
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
                 {...formik.getFieldProps("firstName")}
               />
               <Field.ErrorText>{formik.errors.firstName}</Field.ErrorText>
             </Field.Root>
             <Field.Root invalid={!!formik.errors.email && formik.touched.email}>
               <Field.Label htmlFor="email">Email Address</Field.Label>
               <Input
                 id="email"
                 name="email"
                 type="email"
                 {...formik.getFieldProps("email")}
               />
               <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
             </Field.Root>
             <Field.Root invalid={!!formik.errors.type && formik.touched.type}>
               <Field.Label htmlFor="type">Type of enquiry</Field.Label>
               <NativeSelect.Root>
               <NativeSelect.Field id="type" name="type" {...formik.getFieldProps("type")}>
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
                 {...formik.getFieldProps("comment")}
               />
               <Field.ErrorText>{formik.errors.comment}</Field.ErrorText>
             </Field.Root>
             <Button
             type="submit"
             colorScheme="black"
             backgroundColor="blue"
             width="full"
             disabled={!formik.isValid}
             isLoading={isLoading}
            //  color="white"
             _hover={{bg: "black"}}>
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