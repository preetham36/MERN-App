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
                "img_url": "https://i.imgur.com/P7dtXaP.jpg",
                "movie_rating": 9.1,
                "release_date": "Dec 27 2019",
                "genre": "Action",
                "movie_duration": "2h 52m",
            },
            {
                "movie_title": "Ala Vaikunthapurramuloo",
                "img_url": "https://imgur.com/UMlIsxd.jpg",
                "movie_rating": 8.5,
                "release_date": "Jan 12 2020",
                "genre": "Drama",
                "movie_duration": "2h 45m",
            },
            {
                "movie_title": "Good Newwz",
                "img_url": "https://imgur.com/1rd0vVQ.jpg",
                "movie_rating": 7.7,
                "release_date": "Dec 27 2019",
                "genre": "Comedy",
                "movie_duration": "2h 14m",
            },
            {
                "movie_title": "Dabang 3",
                "img_url": "https://imgur.com/AgAHcVV.jpg",
                "movie_rating": 6.7,
                "release_date": "Dec 20 2019",
                "genre": "Thriller",
                "movie_duration": "2h 43m",
            },
            {
                "movie_title": "Jumanji: The Next Level",
                "img_url": "https://i.imgur.com/E3oULQc.jpg",
                "movie_rating": 8.1,
                "release_date": "Dec 13 2019",
                "genre": "Adventure",
                "movie_duration": "2h 02m",
            },
            {
                "movie_title": "Ford v Ferrari",
                "img_url": "https://imgur.com/o7rXpB6.jpg",
                "movie_rating": 9.3,
                "release_date": "Nov 15 2019",
                "genre": "Biography",
                "movie_duration": "2h 35m",
            },
            {
                "movie_title": "Frozen II",
                "img_url": "https://imgur.com/PY0hrp1.jpg",
                "movie_rating": 8.3,
                "release_date": "Nov 22 2019",
                "genre": "Animation",
                "movie_duration": "1h 43m",
            },
            {
                "movie_title": "Avane Srimannarayana (ASN)",
                "img_url": "https://i.imgur.com/P7dtXaP.jpg",
                "movie_rating": 9.1,
                "release_date": "Dec 27 2019",
                "genre": "Action",
                "movie_duration": "2h 52m",
            },
            {
                "movie_title": "Ala Vaikunthapurramuloo",
                "img_url": "https://imgur.com/UMlIsxd.jpg",
                "movie_rating": 8.5,
                "release_date": "Jan 12 2020",
                "genre": "Drama",
                "movie_duration": "2h 45m",
            },
            {
                "movie_title": "Good Newwz",
                "img_url": "https://imgur.com/1rd0vVQ.jpg",
                "movie_rating": 7.7,
                "release_date": "Dec 27 2019",
                "genre": "Comedy",
                "movie_duration": "2h 14m",
            },
            {
                "movie_title": "Dabang 3",
                "img_url": "https://imgur.com/AgAHcVV.jpg",
                "movie_rating": 6.7,
                "release_date": "Dec 20 2019",
                "genre": "Thriller",
                "movie_duration": "2h 43m",
            },
            {
                "movie_title": "Jumanji: The Next Level",
                "img_url": "https://i.imgur.com/E3oULQc.jpg",
                "movie_rating": 8.1,
                "release_date": "Dec 13 2019",
                "genre": "Adventure",
                "movie_duration": "2h 02m",
            },
            {
                "movie_title": "Ford v Ferrari",
                "img_url": "https://imgur.com/o7rXpB6.jpg",
                "movie_rating": 9.3,
                "release_date": "Nov 15 2019",
                "genre": "Biography",
                "movie_duration": "2h 35m",
            },
            {
                "movie_title": "Frozen II",
                "img_url": "https://imgur.com/PY0hrp1.jpg",
                "movie_rating": 8.3,
                "release_date": "Nov 22 2019",
                "genre": "Animation",
                "movie_duration": "1h 43m",
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