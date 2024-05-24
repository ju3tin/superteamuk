import React from 'react'

import Nav from '../../components/Common/Header'
import { Helmet } from 'react-helmet';
const fn = () => {
console.log('render Main')
    return (
        <>
        <Helmet>
        <title>My Dynamic Title</title>
        <meta name="description" content="This is a dynamic description for my page." />
      </Helmet>
        <Nav />
        </>
    )
}
export default fn;
