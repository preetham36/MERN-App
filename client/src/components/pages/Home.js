import React, { Fragment, useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <ContactFilter />
            <div className="grid-3 my-2"><Contacts /></div>
        </Fragment>
    )
}

export default Home;