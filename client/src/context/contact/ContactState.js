import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                "movie_title": "Avane Srimannarayana (ASN)",
                "img_url": "https://i.imgur.com/Op4eKuJ.jpg",
                "movie_rating": 9.1,
                "release_date": "Dec 27 2019",
                "genre": "Action",
                "movie_duration": "2h 52m",
                "desc":  "Avane Srimannarayana (ASN): Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Ala Vaikunthapurramuloo",
                "img_url": "https://imgur.com/uL93ChL.jpg",
                "movie_rating": 8.5,
                "release_date": "Jan 12 2020",
                "genre": "Drama",
                "movie_duration": "2h 45m",
                "desc":  "Ala Vaikunthapurramuloo: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Good Newwz",
                "img_url": "https://imgur.com/pa7jbRR.jpg",
                "movie_rating": 7.7,
                "release_date": "Dec 27 2019",
                "genre": "Comedy",
                "movie_duration": "2h 14m",
                "desc":  "Good Newwz: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Dabang 3",
                "img_url": "https://imgur.com/UHDlrPx.jpg",
                "movie_rating": 6.7,
                "release_date": "Dec 20 2019",
                "genre": "Thriller",
                "movie_duration": "2h 43m",
                "desc":  "Dabang 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Jumanji: The Next Level",
                "img_url": "https://i.imgur.com/Q6D3daV.jpg",
                "movie_rating": 8.1,
                "release_date": "Dec 13 2019",
                "genre": "Adventure",
                "movie_duration": "2h 02m",
                "desc":  "Jumanji: The Next Level: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Ford v Ferrari",
                "img_url": "https://imgur.com/fyVPMtT.jpg",
                "movie_rating": 9.3,
                "release_date": "Nov 15 2019",
                "genre": "Biography",
                "movie_duration": "2h 35m",
                "desc":  "Ford v Ferrari: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Frozen II",
                "img_url": "https://imgur.com/8BJfrwo.jpg",
                "movie_rating": 8.3,
                "release_date": "Nov 22 2019",
                "genre": "Animation",
                "movie_duration": "1h 43m",
                "desc":  "Frozen II: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Avane Srimannarayana (ASN)",
                "img_url": "https://i.imgur.com/Op4eKuJ.jpg",
                "movie_rating": 9.1,
                "release_date": "Dec 27 2019",
                "genre": "Action",
                "movie_duration": "2h 52m",
                "desc":  "Avane Srimannarayana (ASN): Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Ala Vaikunthapurramuloo",
                "img_url": "https://imgur.com/uL93ChL.jpg",
                "movie_rating": 8.5,
                "release_date": "Jan 12 2020",
                "genre": "Drama",
                "movie_duration": "2h 45m",
                "desc":  "Ala Vaikunthapurramuloo: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Good Newwz",
                "img_url": "https://imgur.com/pa7jbRR.jpg",
                "movie_rating": 7.7,
                "release_date": "Dec 27 2019",
                "genre": "Comedy",
                "movie_duration": "2h 14m",
                "desc":  "Good Newwz: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Dabang 3",
                "img_url": "https://imgur.com/UHDlrPx.jpg",
                "movie_rating": 6.7,
                "release_date": "Dec 20 2019",
                "genre": "Thriller",
                "movie_duration": "2h 43m",
                "desc":  "Dabang 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Jumanji: The Next Level",
                "img_url": "https://i.imgur.com/E3oULQc.jpg",
                "movie_rating": 8.1,
                "release_date": "Dec 13 2019",
                "genre": "Adventure",
                "movie_duration": "2h 02m",
                "desc":  "Jumanji: The Next Level: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Ford v Ferrari",
                "img_url": "https://imgur.com/fyVPMtT.jpg",
                "movie_rating": 9.3,
                "release_date": "Nov 15 2019",
                "genre": "Biography",
                "movie_duration": "2h 35m",
                "desc":  "Ford v Ferrari: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                "movie_title": "Frozen II",
                "img_url": "https://imgur.com/8BJfrwo.jpg",
                "movie_rating": 8.3,
                "release_date": "Nov 22 2019",
                "genre": "Animation",
                "movie_duration": "1h 43m",
                "desc":  "Frozen II: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            }
        ],
        current: null,
        filtered: null,
    };

    const [ state, dispatch ] = useReducer(contactReducer, initialState);
    
    // Add Contact 
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete Contact  
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }

    // Filter Contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    }

    return (
        <ContactContext.Provider value = {{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            { props.children }
        </ContactContext.Provider>
    )


};

export default ContactState;