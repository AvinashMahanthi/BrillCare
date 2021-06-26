import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Brill Care`}</title>
        </Helmet>
    )
}

export default MetaData
MetaData.propTypes = {
    title: PropTypes.string,
};