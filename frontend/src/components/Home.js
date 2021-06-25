import {
    Button, Container, Flex, Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from "../components/layout/Search";
import {
    PATIENT_FAIL
} from "../constants/patientConstants";
import Loader from './layout/Loader';
import MetaData from "./layout/MetaData";
import Patient from './patient/Patient';
import Mainpage from './Mainpage';

const Home = ({ history }) => {

    const { isAuthenticated } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { loading, patient } = useSelector(state => state.patient)

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Brill Care - Home'} />

                    {!isAuthenticated ? <Mainpage /> :
                        <>
                            {
                                patient ? <>
                                    <Flex
                                        align={'center'}
                                        justify={'center'}
                                        bg={useColorModeValue('gray.50', 'gray.800')}>
                                        <Container
                                            maxW={'lg'}
                                            bg={useColorModeValue('white', 'whiteAlpha.100')}
                                            boxShadow={'xl'}
                                            rounded={'lg'}
                                            p={6}
                                            direction={'column'}>
                                            <Stack
                                                spacing={'12px'}
                                            >
                                                <Button
                                                    colorScheme={'blue'}
                                                    w="100%"
                                                    onClick={() => dispatch({ type: PATIENT_FAIL })}
                                                >
                                                    Search for Other Patient
                                                </Button>
                                            </Stack>
                                        </Container>
                                    </Flex>
                                    <Patient key={patient.id} patient={patient} col={12} />
                                </>
                                    :
                                    <Search history={history} />
                            }
                        </>
                    }
                </Fragment>
            )}
        </Fragment>
    )
}

export default Home;

Home.propTypes = {
    history: PropTypes.any,
    match: PropTypes.any
};