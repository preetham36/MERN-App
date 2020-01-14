import React, { useContext, useEffect } from 'react';
import ContactForm from '../contacts/ContactForm';
import AuthContext from '../../context/auth/authContext';

const About = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);
    return (

        <div>
            <ContactForm />
        </div>
        // <div>
        //    <h1>About this App</h1>
        //    <p className="my-1">
        //        This is a full stack React App for Movie List
        //    </p>
        //    <p className="bg-dark p">
        //        <strong>Version: </strong> 1.0.0
        //    </p>
        // </div>
    )
}
export default About;