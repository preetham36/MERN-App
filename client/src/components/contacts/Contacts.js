import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;
    // console.log("filtered", filtered);
    // console.log("movies", contacts)
    if(contacts.length === 0){
        return <h4>Please add a Movie List</h4>
    }
    return (
        <Fragment>
            <TransitionGroup>
            {filtered !== null 
            ? filtered.map((movie ,i)=> (
                <CSSTransition key={i} timeout={500} classNames="item">
                    <ContactItem contact={movie} />
                </CSSTransition>
            )) 
            : contacts.map((movie ,i) => (
                <CSSTransition key={i} timeout={500} classNames="item">
                    <ContactItem contact={movie} />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </Fragment>
    )
};

export default Contacts;