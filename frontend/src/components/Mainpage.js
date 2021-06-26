/* eslint-disable react/prop-types */
import React from 'react'
import {
    Button, Flex, Stack,
    Text, Heading
} from '@chakra-ui/react';
// import Testimonials from "./Testimonials";
import Testimonials2 from "./Testimonials2";
import Features from './Features';
import Statistics from './Statistics';
import Pricing from "./Pricing"
const Mainpage = () => {
    return (
        <>
            <Flex align={'end'} justify={"flex-end"} p={10} minH={["80vh", "100vh"]}
                backgroundImage="url(./images/home-banner.jpg)"
            >
                <Stack align="center"
                    textAlign={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Meeting scheduling
                        <Text as={'span'} color={'orange.400'}>
                            made easy
                        </Text>
                    </Heading>
                    <Text color={'black.500'} maxW={'3xl'}>
                        Never miss a meeting. Never be late for one too. Keep track of your
                        meetings and receive smart reminders in appropriate times. Read your
                        smart “Daily Agenda” every morning.
                    </Text>
                    <Stack spacing={6} direction={'row'}>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}>
                            Get started
                        </Button>
                        <Button rounded={'full'} px={6}>
                            Learn more
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Features />
            <Pricing />
            <Statistics />
            {/* <Testimonials /> */}
            <Testimonials2 />
        </>
    )
}

export default Mainpage


