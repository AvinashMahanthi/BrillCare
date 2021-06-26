/* eslint-disable react/prop-types */
import React from "react";
import {
  Stack,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Image,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
// import { PhoneIcon, IoSearchSharp } from "react-icons/io5";
import { BiVideo, BiChat, BiPackage, BiPhoneCall } from "react-icons/bi";
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <Flex align={"center"} justify={"center"} m={14} minH={["80vh", "100vh"]}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>Talk to a Doctor Within Minutes</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Access Top Doctors for Online Consultations from Anywhere, Anytime
            through <strong>VIDEO/PHONE or CHAT.</strong> <br />
          </Text>
          <Heading>
            Connect with our doctors directly using phone, tablet or computer
          </Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            Just like a clinic visit, our doctors listen to your history of
            symptoms and diagnose your condition. Depending on it, they may
            prescribe medicines or recommend some lab tests.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={BiChat} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Medical Advice through Instant Doctor Chat"}
            />
            <Feature
              icon={<Icon as={BiPhoneCall} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Phone Consultation"}
            />
            <Feature
              icon={<Icon as={BiVideo} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Video Consultation"}
            />
            <Feature
              icon={<Icon as={BiPackage} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Get your medicines delivered home"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};
export default Features;
