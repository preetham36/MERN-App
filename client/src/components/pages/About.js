import React, { Fragment, useContext, useEffect } from 'react';
import ContactForm from '../contacts/ContactForm';
import AuthContext from '../../context/auth/authContext';

const About = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <ContactForm />
        </Fragment>
    )
}
export default About;